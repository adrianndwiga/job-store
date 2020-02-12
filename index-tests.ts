import * as assert from 'assert'
import * as admin from 'firebase-admin'
import { readFileSync } from 'fs'

describe('setup', () => {
    it('should be true', () => {
        assert.equal(true, true)
    })

    it('should connect to firebase', async () => {
        const serviceAccount = JSON.parse(readFileSync('./config.json', 'utf8'))

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
        })

        // tslint:disable-next-line: no-console
        const db = admin.firestore()
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
