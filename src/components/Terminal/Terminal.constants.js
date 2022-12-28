import { ubuntuDateString } from "./Terminal.helpers";

const serverText = `Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-91-generic x86_64)
 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of ${ubuntuDateString()}

  System load:           0.05
  Usage of /:            45.1% of 24.06GB
  Memory usage:          86%
  Swap usage:            0%
  Processes:             124
  Users logged in:       0
  IPv4 address for eth0: 161.230.121.193
  IPv4 address for eth0: 10.34.0.1
  IPv6 address for eth0: 2203:a820:4:3d0::180:e000
  IPv4 address for eth1: 10.120.0.3

4 updates can be applied immediately.
0 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable


*** System restart required ***
Last login: Fri Jan 14 06:50:12 2022 from 70.100.60.100
`;

export const TERMINAL_HOME_TEXT = `Hello and welcome to my portfolio!
    
    As you may have figured out already, my names Derek and I'm a full stack engineer from the SF Bay area. \
    Originally an Electric Motor Mechanic for over a decade but always a nerd at heart, I found my real \
    passion in coding a couple years ago and haven't looked back! 
    
    With this iteration of my portfolio, I decided to have fun a little fun and recreate the terminal I use \
    everyday. Feel free to find out more about me and my projects by navigating using terminal commands or \
    the tabs at the top of the terminal window!

    Commands:
    
    * about: View about me section
    * projects: View some of my projects
    * tech: See the Technology I use and the certificates I've achieved!
    * help: See all available commands
    * home: Go back to the welcome screen
    

  
    Please feel free to explore and check out some of my work!
`;

export const TERMINAL_INTRO_LINES2 = [
  {
    text: "ssh-dmrServer",
  },
  {
    locationLine: false,
    typeWrite: false,
    text: serverText,
  },
  {
    text: "cd projects/nextjs/dwd",
  },
];
