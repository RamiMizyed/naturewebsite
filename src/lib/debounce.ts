type DebounceFunction<T extends (...args: any[]) => any> = (
	...args: Parameters<T>
) => void;

export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): DebounceFunction<T> {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return (...args: Parameters<T>) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func(...args);
		}, wait);
	};
}
