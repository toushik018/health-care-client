import { IDoctor } from "@/types/doctor"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"
import { IMeta } from "@/types"


const scheduleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSchedule: build.mutation({
            query: (data) => ({
                url: "/schedule",
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.schedule]
        }),

        getAllSchedule: build.query({
            query: (arg: Record<string, any>) => ({
                url: '/schedule',
                method: 'GET',
                params: arg,
            }),
            transformResponse: (response: [], meta: IMeta) => {
                return {
                    schedule: response,
                    meta,
                };
            },
            providesTags: [tagTypes.schedule],
        }),

        deleteSchedule: build.mutation({
            query: (id) => ({
                url: `/schedule/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: [tagTypes.schedule]
        }),
    }),
})

export const {
    useCreateScheduleMutation,
    useGetAllScheduleQuery,
    useDeleteScheduleMutation

} = scheduleApi