import { Store } from '.'
import { Db } from '../db'

describe('job-search store', () => {
    it('should add jobs', async () => {
        const store = new Store(Db.getInstance())
        const jobs = [{
            id: 'test-job-id-1',
            title: 'test job title',
            salary: 'test job salary',
            location: 'test job location',
            jobUrl: 'job/url',
            company: 'some company'
        }]

        await store.addJobs(jobs)

        const savedJobs = await store.getJobs()

        // tslint:disable-next-line: no-console
        console.log(savedJobs)
    })
})
