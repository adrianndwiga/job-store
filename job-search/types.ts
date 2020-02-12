export interface JobDetailConfig {
    title: string
    company: string
    salary: string
    link: string
    location: string
}

export interface Config {
    title: string
    baseUrl: string
    url: string
    cookie?: string
    result: string
    detail: JobDetailConfig
}

export type GetConfig = () => Config

export type GetConfigKeys = () => string[]
