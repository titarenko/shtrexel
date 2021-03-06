import puppeteer from 'puppeteer';
export default class Session {
    private browser?;
    private page?;
    getPage(): Promise<puppeteer.Page>;
    close(): Promise<void>;
}
