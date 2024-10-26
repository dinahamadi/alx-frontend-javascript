import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises).then((results) => {
    const output = [];
    results.forEach(({ status, value, reason }) => {
      output.push({
        status,
        value: status === 'fulfilled' ? value : reason.toString(),
      });
    });
    return output;
  });
}
