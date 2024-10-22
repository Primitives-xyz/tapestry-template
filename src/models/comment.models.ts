export interface IComment {

}

export interface ICreateCommentInput {
    profileId: string
    contentId: string
    text: string
    commentId?: string
}

export interface ICreateCommentResponse {
    comment: {
        namespace: string
        created_at: string
        id: string
        text: string
    }
}