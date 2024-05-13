import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


const specialtiesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialty: build.mutation({
            query: (data) => ({
                url: "/specialities",
                method: "POST",
                contentType: "multipart/form-data",
                data,
            }),
            invalidatesTags: [tagTypes.specialties]
        }),
        getAllSpecialites: build.query({
            query: () => ({
                url: "/specialities",
                method: "GET"
            }),
            providesTags: [tagTypes.specialties]
        }),
        deleteSpecialty: build.mutation({
            query: (id) => ({
                url: `/specialities/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: [tagTypes.specialties]
        }),
    }),
})

export const {
    useCreateSpecialtyMutation,
    useGetAllSpecialitesQuery,
    useDeleteSpecialtyMutation
} = specialtiesApi