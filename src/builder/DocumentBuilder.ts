export class DocumentBuilder {
  private header?: string;
  private body?: string;
  private footer?: string;

  public addHeader(header: string): this {
    this.header = header;
    return this;
  }

  public addBody(body: string): this {
    this.body = body;
    return this;
  }

  public addFooter(footer: string): this {
    this.footer = footer;
    return this;
  }

  public build(): string {
    const parts: string[] = [];

    if (this.header !== undefined) {
      parts.push(`=== ${this.header} ===`);
    }

    if (this.body !== undefined) {
      parts.push(this.body);
    }

    if (this.footer !== undefined) {
      parts.push(this.footer);
    }

    return parts.join("\n\n");
  }
}