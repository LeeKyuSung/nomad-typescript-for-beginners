const hello = () => "hi";

interface SStorage<T> {
  [key: string]: T;
}
interface LocalStorageAPI<T> {
  storage: SStorage<T>;
  setItem(key: string, value: T): void;
  getItem(key: string): T | null;
  clearItem(key: string): void;
  clear(): void;
}
class LocalStorage<T> implements LocalStorageAPI<T> {
  storage: SStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
const localSStorage = new LocalStorage();
localSStorage.setItem("name", "John");
localSStorage.getItem("name");
localSStorage.clearItem("name");
localSStorage.clear();

type Options = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};
interface GeolocationAPI {
  getCurrentPosition(success: PositionCallback): void;
  getCurrentPosition(
    success: PositionCallback,
    error: PositionErrorCallback
  ): void;
  getCurrentPosition(
    success: PositionCallback,
    error: PositionErrorCallback,
    options: Options
  ): void;
  watchPosition(success: PositionCallback): number;
  watchPosition(
    success: PositionCallback,
    error: PositionErrorCallback
  ): number;
  watchPosition(
    success: PositionCallback,
    error: PositionErrorCallback,
    options: Options
  ): number;
  clearWatch(id: number): void;
}
class GGeolocation implements GeolocationAPI {
  getCurrentPosition(
    success: PositionCallback,
    error?: PositionErrorCallback,
    options?: Options
  ): void {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  watchPosition(
    success: PositionCallback,
    error?: PositionErrorCallback,
    options?: Options
  ): number {
    return navigator.geolocation.watchPosition(success, error, options);
  }

  clearWatch(id: number): void {
    navigator.geolocation.clearWatch(id);
  }
}

const successFn: PositionCallback = (position: GeolocationPosition) => {
  const crd = position.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
};
const errorFn: PositionErrorCallback = (error: GeolocationPositionError) => {
  console.warn(`ERROR(${error.code}): ${error.message}`);
};
const optionsObj: Options = {
  maximumAge: 0,
  timeout: 5000,
  enableHighAccuracy: true,
};

let id = -1;
const target = {
  latitude: 0,
  longitude: 0,
};
const success: PositionCallback = (position: GeolocationPosition) => {
  const crd = position.coords;
  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    geolocation.clearWatch(id);
  }
};
const error: PositionErrorCallback = (err: GeolocationPositionError) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};
const options: Options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const geolocation = new GGeolocation();

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
id = geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);
