export type PostType = {
    id: number
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
export type FriendType = {
    id: number
    name: string
    imgLink: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    imgLink: string
}
export type NewsType = {
    list: Array<any>
    size: number
    page: number
    preloader: boolean
}
export type FriendsType = {
    list: Array<any>,
    size: number,
    page: number,
    showmore: boolean,
    preloader: boolean
}