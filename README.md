Rabe-server
===========

Rasperry PI Belmont control.  
use express Framework, mongodb database  

The application is now split in two part. A server that will handle all DB & Web site request and a client, Rabe. This will avoid SD card destruction on the Rasperry PI side. 


Modification done on Monk module 
================================

By default, monk is hanging on a Raspberry PI.
see http://stackoverflow.com/questions/16746134/bus-error-on-mongodb-mongoclient-connect-for-raspberry-pi-arm

TODO
====

 * Integrate graph: http://code.shutterstock.com/rickshaw/
 * eMail Alert: http://www.nodemailer.com/
 * Add webcam flow
 * Add webcam control

Rasperry Pi installation
========================

How to install node: http://joshondesign.com/2013/10/23/noderpi
How to add GIT SSH key : https://help.github.com/articles/generating-ssh-keys#platform-linux
Module loading : http://www.framboise314.fr/mesure-de-temperature-1-wire-ds18b20-avec-le-raspberry-pi/
Building mongo: http://aloon.com/install-mongodb-in-raspberry-pi/


