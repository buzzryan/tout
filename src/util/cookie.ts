export class CookieUtil {
    static get(key: string): string | null {
        for (const item of document.cookie.split(";")) {
            const [k, v] = item.split("=")
            if (k.trim() === key) {
                return v
            }
        }
        return null
    }
}