import { Ref } from 'vue-demi'
type ToRefs<T> = {
  [P in keyof T]: Ref<T[P]>
}
export type noop = (...args: any[]) => any

// ------------- useRequest ------------- //
export type RequestService<P extends any[]> =
  | string
  | { url: string; [key: string]: any }
  | ((...args: P) => string)
  | ((...args: P) => { url: string; [key: string]: any })

export interface BaseRequestOptions<R, P extends any[]> {
  defaultLoading?: boolean
  defaultParams?: P
  defaultData?: R

  onSuccess?: (data: R, params: P) => void
  onError?: (error: Error, params: P) => void

  manual?: boolean

  loadingDelay?: number
  pollingTime?: number
  debounceTime?: number
  throttleTime?: number

  throwOnError?: boolean
  // 缓存
  cacheKey?: string
  cacheTime?: number
  fetchKey?: (...args: P) => string
}

export type BaseRequestOptionsWithFormat<
  R,
  P extends any[],
  U,
  UU extends U
> = {
  formatResult: (res: R) => U
} & BaseRequestOptions<UU, P>

// custom request
export type RequestOptionsWithFormat<
  R,
  P extends any[],
  U,
  UU extends U,
  S extends RequestService<P>
> = {
  requestMethod?: S extends (...args: P) => infer T
    ? (param: T) => Promise<R>
    : (param: S, ...args: P) => Promise<R>
  formatResult: (res: R) => U
} & BaseRequestOptions<UU, P>

export type RequestOptions<R, P extends any[], S extends RequestService<P>> = {
  requestMethod?: S extends (...args: any[]) => infer T
    ? (param: T) => Promise<R>
    : (param: S, ...args: P) => Promise<R>
} & BaseRequestOptions<R, P>

// ------------- Fetch ------------- //
export type Service<R, P extends any[]> = (...args: P) => Promise<R>

export type Subscribe<R, P extends any[]> = (result: FetchResult<R, P>) => any

export interface Fetches<R, P extends any[]> {
  [key: string]: FetchResult<R, P>
}

export interface FetchResult<R, P extends any[]> {
  loading: boolean
  data: R | undefined
  error: Error | undefined
  params: P | undefined
  cancel: noop
  refresh: () => Promise<R>
  run: (...args: P) => Promise<R>
  unmount: () => void
}

export type CurFetchResult<R, P extends any[]> = Pick<
  FetchResult<R, P>,
  Exclude<keyof FetchResult<R, P>, 'run' | 'unmount'>
>

export interface FetchConfig<R, P extends any[]> {
  // 请求结果格式化
  formatResult?: (res: any) => R

  onSuccess?: (data: any, params: P) => void
  onError?: (error: Error, params: P) => void

  pollingTime?: number

  loadingDelay?: number

  debounceTime?: number
  throttleTime?: number

  throwOnError?: boolean
}

// ------------- useAsync ------------- //
export type AsyncOptions<R, P extends any[]> = BaseRequestOptions<R, P>
export type AsyncOptionsWithFormat<R, P extends any[], U, UU extends U> = {
  formatResult: (res: R) => U
} & BaseRequestOptions<UU, P>

export type AsyncOptionsAll<R, P extends any[], U, UU extends U> =
  | AsyncOptions<R, P>
  | AsyncOptionsWithFormat<R, P, U, UU>

export interface AsyncResult<R, P extends any[]>
  extends ToRefs<CurFetchResult<R, P>> {
  reset: () => void
  run: (...args: P) => Promise<R>
  fetches: {
    [key: string]: FetchResult<R, P>
  }
}
