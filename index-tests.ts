import * as assert from 'assert'
import { Db } from './db'

describe('setup', () => {
    it('should be true', () => {
        assert.equal(true, true)
    })

    it('should connect to firebase', async () => {
        const db = Db.getInstance()
        const janeSmith = db.collection('jobs').doc('jane-smith')
        const result = await janeSmith.set({
            name: 'Joanne',
            lastname: 'Smith'
        })
        const snapshot = await db.collection('jobs').get()
        // tslint:disable-next-line: no-console
        console.log(result, snapshot.docs.length)

        snapshot.docs.forEach(doc => {
            // tslint:disable-next-line: no-console
            console.log(doc.id, '=>', doc.data())
        })
    })
})
