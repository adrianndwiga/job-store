import * as admin from 'firebase-admin'
import { readFileSync } from 'fs'

export class Db {
    private static instance: FirebaseFirestore.Firestore

    public static getInstance(): FirebaseFirestore.Firestore {
        if (!this.instance) {
            const serviceAccount = JSON.parse(readFileSync('./config.json', 'utf8'))

            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
            })

            this.instance = admin.firestore()
        }
        return this.instance
    }
}
