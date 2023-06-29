/// <reference types="react" />
declare const useAdminOnboardingState: <TResponse>(id: string, options?: {
    meta?: import("@tanstack/query-core").QueryMeta;
    onError?: (err: Error) => void;
    enabled?: boolean;
    context?: import("react").Context<import("@tanstack/query-core").QueryClient>;
    staleTime?: number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnReconnect?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnMount?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    retryOnMount?: boolean;
    notifyOnChangeProps?: "all" | ("data" | "status" | "error" | "isLoading" | "isError" | "isSuccess" | "failureCount" | "failureReason" | "isPaused" | "isLoadingError" | "isRefetchError" | "fetchNextPage" | "fetchPreviousPage" | "hasNextPage" | "hasPreviousPage" | "isFetchingNextPage" | "isFetchingPreviousPage" | "dataUpdatedAt" | "errorUpdatedAt" | "errorUpdateCount" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isInitialLoading" | "isPlaceholderData" | "isPreviousData" | "isRefetching" | "isStale" | "refetch" | "remove" | "fetchStatus")[];
    onSuccess?: (data: import("@medusajs/medusa-js").Response<TResponse>) => void;
    onSettled?: (data: import("@medusajs/medusa-js").Response<TResponse>, error: Error) => void;
    useErrorBoundary?: import("@tanstack/query-core").UseErrorBoundary<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>;
    suspense?: boolean;
    keepPreviousData?: boolean;
    placeholderData?: import("@medusajs/medusa-js").Response<TResponse> | import("@tanstack/query-core").PlaceholderDataFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    _optimisticResults?: "optimistic" | "isRestoring";
    retry?: import("@tanstack/query-core/build/lib/retryer").RetryValue<Error>;
    retryDelay?: import("@tanstack/query-core/build/lib/retryer").RetryDelayValue<Error>;
    networkMode?: import("@tanstack/query-core").NetworkMode;
    cacheTime?: number;
    isDataEqual?: (oldData: import("@medusajs/medusa-js").Response<TResponse>, newData: import("@medusajs/medusa-js").Response<TResponse>) => boolean;
    queryHash?: string;
    queryKeyHashFn?: import("@tanstack/query-core").QueryKeyHashFunction<import("@tanstack/query-core").QueryKey>;
    initialData?: import("@medusajs/medusa-js").Response<TResponse> | import("@tanstack/query-core").InitialDataFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    initialDataUpdatedAt?: number | (() => number);
    behavior?: import("@tanstack/query-core/build/lib/query").QueryBehavior<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>;
    structuralSharing?: boolean | ((oldData: import("@medusajs/medusa-js").Response<TResponse>, newData: import("@medusajs/medusa-js").Response<TResponse>) => import("@medusajs/medusa-js").Response<TResponse>);
    getPreviousPageParam?: import("@tanstack/query-core").GetPreviousPageParamFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    getNextPageParam?: import("@tanstack/query-core").GetNextPageParamFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    _defaulted?: boolean;
}) => import("@tanstack/react-query").UseQueryResult<import("@medusajs/medusa-js").Response<TResponse>, Error>, useAdminUpdateOnboardingStateMutation: <TPayload_1 extends Record<string, any>, TResponse_3>(id: string, options?: import("@tanstack/react-query").UseMutationOptions<import("@medusajs/medusa-js").Response<TResponse_3>, Error, TPayload_1, unknown>) => import("@tanstack/react-query").UseMutationResult<import("@medusajs/medusa-js").Response<TResponse_3>, Error, TPayload_1, unknown>;
declare const useAdminProductMedia: <TResponse>(id: string, options?: {
    meta?: import("@tanstack/query-core").QueryMeta;
    onError?: (err: Error) => void;
    enabled?: boolean;
    context?: import("react").Context<import("@tanstack/query-core").QueryClient>;
    staleTime?: number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnReconnect?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnMount?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    retryOnMount?: boolean;
    notifyOnChangeProps?: "all" | ("data" | "status" | "error" | "isLoading" | "isError" | "isSuccess" | "failureCount" | "failureReason" | "isPaused" | "isLoadingError" | "isRefetchError" | "fetchNextPage" | "fetchPreviousPage" | "hasNextPage" | "hasPreviousPage" | "isFetchingNextPage" | "isFetchingPreviousPage" | "dataUpdatedAt" | "errorUpdatedAt" | "errorUpdateCount" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isInitialLoading" | "isPlaceholderData" | "isPreviousData" | "isRefetching" | "isStale" | "refetch" | "remove" | "fetchStatus")[];
    onSuccess?: (data: import("@medusajs/medusa-js").Response<TResponse>) => void;
    onSettled?: (data: import("@medusajs/medusa-js").Response<TResponse>, error: Error) => void;
    useErrorBoundary?: import("@tanstack/query-core").UseErrorBoundary<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>;
    suspense?: boolean;
    keepPreviousData?: boolean;
    placeholderData?: import("@medusajs/medusa-js").Response<TResponse> | import("@tanstack/query-core").PlaceholderDataFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    _optimisticResults?: "optimistic" | "isRestoring";
    retry?: import("@tanstack/query-core/build/lib/retryer").RetryValue<Error>;
    retryDelay?: import("@tanstack/query-core/build/lib/retryer").RetryDelayValue<Error>;
    networkMode?: import("@tanstack/query-core").NetworkMode;
    cacheTime?: number;
    isDataEqual?: (oldData: import("@medusajs/medusa-js").Response<TResponse>, newData: import("@medusajs/medusa-js").Response<TResponse>) => boolean;
    queryHash?: string;
    queryKeyHashFn?: import("@tanstack/query-core").QueryKeyHashFunction<import("@tanstack/query-core").QueryKey>;
    initialData?: import("@medusajs/medusa-js").Response<TResponse> | import("@tanstack/query-core").InitialDataFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    initialDataUpdatedAt?: number | (() => number);
    behavior?: import("@tanstack/query-core/build/lib/query").QueryBehavior<import("@medusajs/medusa-js").Response<TResponse>, Error, import("@medusajs/medusa-js").Response<TResponse>, import("@tanstack/query-core").QueryKey>;
    structuralSharing?: boolean | ((oldData: import("@medusajs/medusa-js").Response<TResponse>, newData: import("@medusajs/medusa-js").Response<TResponse>) => import("@medusajs/medusa-js").Response<TResponse>);
    getPreviousPageParam?: import("@tanstack/query-core").GetPreviousPageParamFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    getNextPageParam?: import("@tanstack/query-core").GetNextPageParamFunction<import("@medusajs/medusa-js").Response<TResponse>>;
    _defaulted?: boolean;
}) => import("@tanstack/react-query").UseQueryResult<import("@medusajs/medusa-js").Response<TResponse>, Error>, useAdminProductMedias: <TQuery extends Record<string, any>, TResponse_1>(query?: TQuery, options?: {
    meta?: import("@tanstack/query-core").QueryMeta;
    onError?: (err: Error) => void;
    enabled?: boolean;
    context?: import("react").Context<import("@tanstack/query-core").QueryClient>;
    staleTime?: number;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse_1>, Error, import("@medusajs/medusa-js").Response<TResponse_1>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnReconnect?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse_1>, Error, import("@medusajs/medusa-js").Response<TResponse_1>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    refetchOnMount?: boolean | "always" | ((query: import("@tanstack/query-core").Query<import("@medusajs/medusa-js").Response<TResponse_1>, Error, import("@medusajs/medusa-js").Response<TResponse_1>, import("@tanstack/query-core").QueryKey>) => boolean | "always");
    retryOnMount?: boolean;
    notifyOnChangeProps?: "all" | ("data" | "status" | "error" | "isLoading" | "isError" | "isSuccess" | "failureCount" | "failureReason" | "isPaused" | "isLoadingError" | "isRefetchError" | "fetchNextPage" | "fetchPreviousPage" | "hasNextPage" | "hasPreviousPage" | "isFetchingNextPage" | "isFetchingPreviousPage" | "dataUpdatedAt" | "errorUpdatedAt" | "errorUpdateCount" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isInitialLoading" | "isPlaceholderData" | "isPreviousData" | "isRefetching" | "isStale" | "refetch" | "remove" | "fetchStatus")[];
    onSuccess?: (data: import("@medusajs/medusa-js").Response<TResponse_1>) => void;
    onSettled?: (data: import("@medusajs/medusa-js").Response<TResponse_1>, error: Error) => void;
    useErrorBoundary?: import("@tanstack/query-core").UseErrorBoundary<import("@medusajs/medusa-js").Response<TResponse_1>, Error, import("@medusajs/medusa-js").Response<TResponse_1>, import("@tanstack/query-core").QueryKey>;
    suspense?: boolean;
    keepPreviousData?: boolean;
    placeholderData?: import("@medusajs/medusa-js").Response<TResponse_1> | import("@tanstack/query-core").PlaceholderDataFunction<import("@medusajs/medusa-js").Response<TResponse_1>>;
    _optimisticResults?: "optimistic" | "isRestoring";
    retry?: import("@tanstack/query-core/build/lib/retryer").RetryValue<Error>;
    retryDelay?: import("@tanstack/query-core/build/lib/retryer").RetryDelayValue<Error>;
    networkMode?: import("@tanstack/query-core").NetworkMode;
    cacheTime?: number;
    isDataEqual?: (oldData: import("@medusajs/medusa-js").Response<TResponse_1>, newData: import("@medusajs/medusa-js").Response<TResponse_1>) => boolean;
    queryHash?: string;
    queryKeyHashFn?: import("@tanstack/query-core").QueryKeyHashFunction<import("@tanstack/query-core").QueryKey>;
    initialData?: import("@medusajs/medusa-js").Response<TResponse_1> | import("@tanstack/query-core").InitialDataFunction<import("@medusajs/medusa-js").Response<TResponse_1>>;
    initialDataUpdatedAt?: number | (() => number);
    behavior?: import("@tanstack/query-core/build/lib/query").QueryBehavior<import("@medusajs/medusa-js").Response<TResponse_1>, Error, import("@medusajs/medusa-js").Response<TResponse_1>, import("@tanstack/query-core").QueryKey>;
    structuralSharing?: boolean | ((oldData: import("@medusajs/medusa-js").Response<TResponse_1>, newData: import("@medusajs/medusa-js").Response<TResponse_1>) => import("@medusajs/medusa-js").Response<TResponse_1>);
    getPreviousPageParam?: import("@tanstack/query-core").GetPreviousPageParamFunction<import("@medusajs/medusa-js").Response<TResponse_1>>;
    getNextPageParam?: import("@tanstack/query-core").GetNextPageParamFunction<import("@medusajs/medusa-js").Response<TResponse_1>>;
    _defaulted?: boolean;
}) => import("@tanstack/react-query").UseQueryResult<import("@medusajs/medusa-js").Response<TResponse_1>, Error>, useAdminCreateProductMediaMutation: <TPayload extends Record<string, any>, TResponse_2>(options?: import("@tanstack/react-query").UseMutationOptions<import("@medusajs/medusa-js").Response<TResponse_2>, Error, TPayload, unknown>) => import("@tanstack/react-query").UseMutationResult<import("@medusajs/medusa-js").Response<TResponse_2>, Error, TPayload, unknown>, useAdminDeleteProductMediaMutation: <TResponse_4>(id: string, options?: import("@tanstack/react-query").UseMutationOptions<import("@medusajs/medusa-js").Response<TResponse_4>, Error, void, unknown>) => import("@tanstack/react-query").UseMutationResult<import("@medusajs/medusa-js").Response<TResponse_4>, Error, void, unknown>, useAdminUpdateProductMediaMutation: <TPayload_1 extends Record<string, any>, TResponse_3>(id: string, options?: import("@tanstack/react-query").UseMutationOptions<import("@medusajs/medusa-js").Response<TResponse_3>, Error, TPayload_1, unknown>) => import("@tanstack/react-query").UseMutationResult<import("@medusajs/medusa-js").Response<TResponse_3>, Error, TPayload_1, unknown>;
declare const useWindowDimensions: () => {
    height: number;
    width: number;
};
export { useWindowDimensions, useAdminCreateProductMediaMutation, useAdminDeleteProductMediaMutation, useAdminOnboardingState, useAdminProductMedia, useAdminProductMedias, useAdminUpdateOnboardingStateMutation, useAdminUpdateProductMediaMutation, };