/**
 * healthCheck - función trivial para comprobar que la aplicación arrancó correctamente.
 * Devuelve un objeto simple con ok=true, el uptime del proceso y un timestamp ISO.
 */
export function healthCheck(): Health {
	return {
		ok: true,
		uptime: typeof process !== 'undefined' && typeof process.uptime === 'function' ? process.uptime() : 0,
		timestamp: new Date().toISOString(),
	};
}

export default healthCheck;

export interface Health {
	ok: boolean;
	uptime: number;
	timestamp: string;
}
