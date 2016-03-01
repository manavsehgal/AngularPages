export class ReleaseModel {
  constructor(
    public timestamp: string,
    public title: string,
    public detail?: string,
    public image?: string
  ) {}
}
