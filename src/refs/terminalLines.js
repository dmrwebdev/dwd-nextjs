// const date = new Date();

// const calenderDate = new Intl.DateTimeFormat("en-US", {
//   weekday: "short",
//   month: "short",
//   day: "numeric",
// }).format(new Date());

// const dateString = `${calenderDate} ${date.getUTCHours()}:${date.getUTCMinutes()}:${
//   date.getUTCSeconds() < 10 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds()
// } UTC ${date.getUTCFullYear()}`;

// export const TERMINAL_INTRO_LINES = [
//   ["derek@DMR-DESKTOP", "~", "ssh-dmrServer"],
//   /* ["_", "", ""], */
//   [
//     "",
//     "",
//     `Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-91-generic x86_64)
//  * Documentation:  https://help.ubuntu.com
//  * Management:     https://landscape.canonical.com
//  * Support:        https://ubuntu.com/advantage

//   System information as of ${dateString.replace(",", "")}

//   System load:           0.05
//   Usage of /:            45.1% of 24.06GB
//   Memory usage:          86%
//   Swap usage:            0%
//   Processes:             124
//   Users logged in:       0
//   IPv4 address for eth0: 161.230.121.193
//   IPv4 address for eth0: 10.34.0.1
//   IPv6 address for eth0: 2203:a820:4:3d0::180:e000
//   IPv4 address for eth1: 10.120.0.3

// 4 updates can be applied immediately.
// 0 of these updates are standard security updates.
// To see these additional updates run: apt list --upgradable

// *** System restart required ***
// Last login: Fri Jan 14 06:50:12 2022 from 70.100.60.100
//     `,
//     true,
//   ],
//   ["derek@DMR-WEBDEV", "~", "cd projects/react/dwd"],
//   ["derek@DMR-WEBDEV", "~/projects/react/dwd", "yarn start"],
//   ["", "", "yarn run v1.22.10", true],
//   /*
//     ["", "", "wait  - compiling...", true],
//     [
//       "",
//       "",
//       "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
//     ], */
// ];

// const common = {
//   user: "derek@DMR-DESKTOP",
//   directory: "~",
// };

// export const TERMINAL_INTRO_LINES2 = [
//   {
//     ...common,
//     text: "ssh-dmrServer",
//   },
//   {
//     text: `Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-91-generic x86_64)
//  * Documentation:  https://help.ubuntu.com
//  * Management:     https://landscape.canonical.com
//  * Support:        https://ubuntu.com/advantage

//   System information as of ${dateString.replace(",", "")}

//   System load:           0.05
//   Usage of /:            45.1% of 24.06GB
//   Memory usage:          86%
//   Swap usage:            0%
//   Processes:             124
//   Users logged in:       0
//   IPv4 address for eth0: 161.230.121.193
//   IPv4 address for eth0: 10.34.0.1
//   IPv6 address for eth0: 2203:a820:4:3d0::180:e000
//   IPv4 address for eth1: 10.120.0.3

// 4 updates can be applied immediately.
// 0 of these updates are standard security updates.
// To see these additional updates run: apt list --upgradable

// *** System restart required ***
// Last login: Fri Jan 14 06:50:12 2022 from 70.100.60.100
//     `,
//   },
//   {
//     ...common,
//     text: "cd projects/react/dwd",
//   },
//   /*   {
//     ...common,
//     text: "yarn run v1.22.10",
//   }, */
// ];
