export type PostType = {
    id: string
    message: string
    likesCount: number
    date: Date
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
    contacts: ContactsType
}
export type UserType = {
    followed?: boolean
    id: number
    name: string
    status: string
    photos: PhotosType
}
export type DialogMessageType = {
    addedAt: string
    body: string
    id: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: string | null
    viewed: boolean
}
export type NewsElementType = {
    title: string
    imageUrl: string
    summary: string
    publishedAt: string
}
export type DialogType = {
    id: number
    hasNewMessage: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
    userName: string
}