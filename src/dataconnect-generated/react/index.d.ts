import { CreateCompanyInfoData, ListProjectsData, UpdateTeamMemberData, UpdateTeamMemberVariables, GetTestimonialData, GetTestimonialVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateCompanyInfo(options?: useDataConnectMutationOptions<CreateCompanyInfoData, FirebaseError, void>): UseDataConnectMutationResult<CreateCompanyInfoData, undefined>;
export function useCreateCompanyInfo(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCompanyInfoData, FirebaseError, void>): UseDataConnectMutationResult<CreateCompanyInfoData, undefined>;

export function useListProjects(options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;
export function useListProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;

export function useUpdateTeamMember(options?: useDataConnectMutationOptions<UpdateTeamMemberData, FirebaseError, UpdateTeamMemberVariables>): UseDataConnectMutationResult<UpdateTeamMemberData, UpdateTeamMemberVariables>;
export function useUpdateTeamMember(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateTeamMemberData, FirebaseError, UpdateTeamMemberVariables>): UseDataConnectMutationResult<UpdateTeamMemberData, UpdateTeamMemberVariables>;

export function useGetTestimonial(vars: GetTestimonialVariables, options?: useDataConnectQueryOptions<GetTestimonialData>): UseDataConnectQueryResult<GetTestimonialData, GetTestimonialVariables>;
export function useGetTestimonial(dc: DataConnect, vars: GetTestimonialVariables, options?: useDataConnectQueryOptions<GetTestimonialData>): UseDataConnectQueryResult<GetTestimonialData, GetTestimonialVariables>;
