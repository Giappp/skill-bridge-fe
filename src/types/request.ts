/*
* All the api request model goes here
*/
export type CoursesFilterParams = {
    search?: string;
    category?: string;
    difficulty?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    page?: number;
    limit?: number;
}