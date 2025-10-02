import {CourseResponse, CoursesFilterParams} from "@/types";
import {axios} from "@/api/core/axios";
import {buildQueryStringFromOptions} from "@/api/core/utils";

export const CourseService = {
    getCourses: async (options: CoursesFilterParams): Promise<CourseResponse> => {
        const params = buildQueryStringFromOptions(options);
        const response = await axios.get<CourseResponse>(`/courses`, {params: params});
        return response.data;
    }
}