import { Job } from "../types"
import { Config } from "./types"

export class Store {
    private static JobSearchCollection: string = 'job-search'

    constructor(private readonly store : FirebaseFirestore.Firestore) {
    }

    private addJob(job: Job): void {
        const jobRef = this.store.collection(Store.JobSearchCollection).doc(job.id)
        jobRef.set(job)
    }

    async addJobs(jobs: Job[]): Promise<void> {
        jobs.forEach(job => this.addJob(job))
    }

    async getJobs(): Promise<Job[]> {
        const collection = await this.store.collection(Store.JobSearchCollection).get()
        return collection.docs.map(x => x.data()) as Job[]
    }
}

// tslint:disable-next-line: max-classes-per-file
export class ConfigStore {
    private static JobSearchConfigCollection: string = 'job-search-config'

    constructor(private readonly store : FirebaseFirestore.Firestore) {
    }

    private addConfig(key: string, config: Config): void {
        const configRef = this.store.collection(ConfigStore.JobSearchConfigCollection).doc(key)
        configRef.set(config)
    }

    async addConfigs(configItems: [{key: string, config: Config}]): Promise<void> {
        configItems.forEach(item => this.addConfig(item.key, item.config))
    }
}
