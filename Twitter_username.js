// Regular expression for Twiter Username
// @[a-zA-Z_]\w*
// Test run with Js

const regex = /@[a-zA-Z_]\w*/;

const testStrings = [
    '@username',
    '@user_name',
    '@123user',
    'Invalid mention: @user-name',
    'Another invalid mention: @user!name'
];

testStrings.forEach(str => {
    console.log(`String: "${str}" => Match: ${regex.test(str)}`);
});
