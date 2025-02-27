export interface IResourceV2 {
    name: string,
    uid: string,
    createTime: string,
    filename: string,
    content: string,
    externalLink: string,
    type: string,
    size: string,
    memo: string
}

export interface IRelationV2 {
    memo: string,
    relatedMemo: string,
    type: string
}

export interface IRelationV0_24_0 {
    memo: {
        name: string,
        uid: string,
        snippet: string
    },
    relatedMemo: {
        name: string,
        uid: string,
        snippet: string
    },
    type: string
}

/**
 * 评论
 */
export interface IReactionV2 {
    id: number,
    creator: string,
    contentId: string,
    reactionType: string
}

export interface IPropertyV2 {
    tags: any,
    hasLink: boolean,
    hasTaskList: boolean,
    hasCode: boolean,
    hasIncompleteTasks: boolean
}

/**
 * Memos
 */
export interface IMemoV2 {
    name: string,
    uid: string,
    rowStatus: string,
    creator: string,
    createTime: string,
    updateTime: string,
    displayTime: string,
    content: string,
    nodes: any,
    visibility: string,
    tags: any,
    pinned: boolean,
    parentId?: number,
    resources: IResourceV2[],
    relations: IRelationV2[],
    reactions: IReactionV2[]
    property?: IPropertyV2,
    snippet?: string
}

export interface IMemoV0_24_0 {
    name: string,
    state: string,
    creator: string,
    createTime: string,
    updateTime: string,
    displayTime: string,
    content: string,
    nodes: any,
    visibility: string,
    tags: any,
    pinned: boolean,
    parentId?: number,
    resources: IResourceV2[],
    relations: IRelationV0_24_0[],
    reactions: IReactionV2[]
    property?: IPropertyV2,
    snippet?: string
}
