import {PermissionsAndroid} from 'react-native';

const requestPermissions = async () => {
  try {
    const permissionStatus = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);

    if (
      Object.values(permissionStatus).every(
        status => status === PermissionsAndroid.RESULTS.GRANTED,
      )
    ) {
      console.log('Permission Granted');
      return true;
    } else {
      console.log('Permission Denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export {requestPermissions};
