import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CompanyInfo_Key {
  id: UUIDString;
  __typename?: 'CompanyInfo_Key';
}

export interface CreateCompanyInfoData {
  companyInfo_insert: CompanyInfo_Key;
}

export interface GetTestimonialData {
  testimonial?: {
    clientName: string;
    quote: string;
    date: DateString;
  };
}

export interface GetTestimonialVariables {
  id: UUIDString;
}

export interface ListProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
  } & Project_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Service_Key {
  id: UUIDString;
  __typename?: 'Service_Key';
}

export interface TeamMember_Key {
  id: UUIDString;
  __typename?: 'TeamMember_Key';
}

export interface Testimonial_Key {
  id: UUIDString;
  __typename?: 'Testimonial_Key';
}

export interface UpdateTeamMemberData {
  teamMember_update?: TeamMember_Key | null;
}

export interface UpdateTeamMemberVariables {
  id: UUIDString;
  bio?: string | null;
}

interface CreateCompanyInfoRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCompanyInfoData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCompanyInfoData, undefined>;
  operationName: string;
}
export const createCompanyInfoRef: CreateCompanyInfoRef;

export function createCompanyInfo(): MutationPromise<CreateCompanyInfoData, undefined>;
export function createCompanyInfo(dc: DataConnect): MutationPromise<CreateCompanyInfoData, undefined>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect): QueryPromise<ListProjectsData, undefined>;

interface UpdateTeamMemberRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTeamMemberVariables): MutationRef<UpdateTeamMemberData, UpdateTeamMemberVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTeamMemberVariables): MutationRef<UpdateTeamMemberData, UpdateTeamMemberVariables>;
  operationName: string;
}
export const updateTeamMemberRef: UpdateTeamMemberRef;

export function updateTeamMember(vars: UpdateTeamMemberVariables): MutationPromise<UpdateTeamMemberData, UpdateTeamMemberVariables>;
export function updateTeamMember(dc: DataConnect, vars: UpdateTeamMemberVariables): MutationPromise<UpdateTeamMemberData, UpdateTeamMemberVariables>;

interface GetTestimonialRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTestimonialVariables): QueryRef<GetTestimonialData, GetTestimonialVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTestimonialVariables): QueryRef<GetTestimonialData, GetTestimonialVariables>;
  operationName: string;
}
export const getTestimonialRef: GetTestimonialRef;

export function getTestimonial(vars: GetTestimonialVariables): QueryPromise<GetTestimonialData, GetTestimonialVariables>;
export function getTestimonial(dc: DataConnect, vars: GetTestimonialVariables): QueryPromise<GetTestimonialData, GetTestimonialVariables>;

