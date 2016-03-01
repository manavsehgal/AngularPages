export class StoryModel {
  constructor(
    public id: number,
    public content: string,
    public expectImage: boolean,
    public expectLink: boolean
  ) {}
}
