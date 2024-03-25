import { writable } from 'svelte/store';

export const messages = writable([]);
export const projectList = writable([]);
export const modelList = writable({});
export const searchEngineList = writable([]);
export const agentState = writable(null);
export const internet = writable(true);
export const tokenUsage = writable(0);