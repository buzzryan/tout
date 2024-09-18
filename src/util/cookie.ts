export class CookieUtil {
    static get(key: string): string | null {
        for (let item of document.cookie.split(";")) {
            const [k, v] = item.split("=")
            if (k.trim() === key) {
                return v
            }
        }
        return null
    }
}