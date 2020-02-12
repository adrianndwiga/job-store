import { Job } from "../types"

export class Store {
    private static JobSearchCollection: string = 'job-search'

    constructor(private readonly store : FirebaseFirestore.Firestore) {
    }

    private addJob(job: Job): void {
        const jobRef = this.store.collection(Store.JobSearchCollection).doc()
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
