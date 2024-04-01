export type BulletinType = {
    id: number,
    publishDate: number,
    publishDateString: string,
    ownerId: number,
    ownerLogin: string,
    bulletinSubject: string,
    bulletinText: string,
    bulletinImages: string[]
    currentBulletin?: number,
    index?: number,
    reason?: string | null
}