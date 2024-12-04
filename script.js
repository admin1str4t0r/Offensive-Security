window.onload = function () {
  let bootText = document.getElementById("boot-text");
  let content = document.querySelector(".content");
  let bootScreen = document.querySelector(".boot-screen");
  let initialWidth = window.outerWidth;
  let initialHeight = window.outerHeight;

  if (!bootText || !content || !bootScreen) {
    console.error("One or more required elements are missing from the page.");
    return;
  }

  function lockWindowSize() {
    window.resizeTo(initialWidth, initialHeight);
  }
  window.addEventListener("resize", lockWindowSize);

  let lines = [
    "[  OK  ] Finished systemd-update-utmp.service - Record System Boot/Shutdown in UTMP.",
    "[  OK  ] Finished apparmor.service - Load AppArmor profiles.",
    "[  OK  ] Started haveged.service - Entropy Daemon based on the HAVEGE algorithm.",
    "         Starting networking.service - Raise network interfaces...",
    "         Starting snapd.apparmor.service - Load AppArmor profiles managed internally by snapd...",
    "         Starting modprobe@efi_pstore.service - Load Kernel Module efi_pstore...",
    "[  OK  ] Finished modprobe@efi_pstore.service - Load Kernel Module efi_pstore.",
    "[  OK  ] Finished networking.service - Raise network interfaces.",
    "         Mounting proc-sys-fs-binfmt_misc.mount - Arbitrary Executable File Formats File System...",
    "[  OK  ] Started cups.service - CUPS Scheduler.",
    "[  OK  ] Started rpc-statd-notify.service - Notify NFS peers of a restart.",
    "[  OK  ] Started acpid.path - ACPI Events Check.",
    "[  OK  ] Started cups.path - CUPS Scheduler.",
    "[  OK  ] Started systemd-tmpfiles-clean.timer - Daily Cleanup of Temporary Directories.",
    "[  OK  ] Reached target paths.target - Path Units.",
    "[  OK  ] Reached target time-set.target - System Time Set.",
    "[  OK  ] Started apt-daily.timer - Daily apt download activities.",
    "[  OK  ] Started apt-daily-upgrade.timer - Daily apt upgrade and clean activities.",
    "[  OK  ] Started dpkg-db-backup.timer - Daily dpkg database backup timer.",
    "[  OK  ] Started e2scrub_all.timer - Periodic ext4 Online Metadata Check for All Filesystems.",
    "[  OK  ] Started exim4-base.timer - Daily exim4-base housekeeping.",
    "[  OK  ] Started fstrim.timer - Discard unused filesystem blocks once a week.",
    "[  OK  ] Started fwupd-refresh.timer - Refresh fwupd metadata regularly.",
    "[  OK  ] Started logrotate.timer - Daily rotation of log files.",
    "[  OK  ] Started man-db.timer - Daily man-db regeneration.",
    "[  OK  ] Started phpsessionclean.timer - Clean PHP session files every 30 mins.",
    "[  OK  ] Started plocate-updatedb.timer - Update the plocate database daily.",
    "[  OK  ] Reached target timers.target - Timer Units.",
    "         Mounting run-rpc_pipefs.mount - RPC Pipe File System...",
    "[  OK  ] Mounted proc-sys-fs-binfmt_misc.mount - Arbitrary Executable File Formats File System.",
    "[  OK  ] Finished systemd-binfmt.service - Set Up Additional Binary Formats.",
    "         Starting binfmt-support.service - Enable support for additional executable binary formats...",
    "[  OK  ] Finished snapd.apparmor.service - Load AppArmor profiles managed internally by snapd.",
    "[  OK  ] Finished binfmt-support.service - Enable support for additional executable binary formats.",
    "[  OK  ] Started systemd-timesyncd.service - Network Time Synchronization.",
    "[  OK  ] Mounted run-rpc_pipefs.mount - RPC Pipe File System.",
    "[  OK  ] Reached target rpc_pipefs.target.",
    "[  OK  ] Reached target sysinit.target - System Initialization.",
    "[ INFO ] Starti0ng v0irtualbox.service - LSB: VirtualBox Linux kernel module...",
    "[  OK  ] Started cups.service - CUPS Scheduler.",
    "[  OK  ] Started rpc-statd-notify.service - Notify NFS peers of a restart.",
    "[  OK  ] Started acpid.path - ACPI Events Check.",
    "[  OK  ] Started cups.path - CUPS Scheduler.",
    "[  OK  ] Started systemd-tmpfiles-clean.timer - Daily Cleanup of Temporary Directories.",
    "[  OK  ] Reached target paths.target - Path Units.",
    "[  OK  ] Reached target time-set.target - System Time Set.",
    "[  OK  ] Started apt-daily.timer - Daily apt download activities.",
    "[  OK  ] Started apt-daily-upgrade.timer - Daily apt upgrade and clean activities.",
    "[  OK  ] Started dpkg-db-backup.timer - Daily dpkg database backup timer.",
    "[  OK  ] Started e2scrub_all.timer - Periodic ext4 Online Metadata Check for All Filesystems.",
    "[  OK  ] Started exim4-base.timer - Daily exim4-base housekeeping.",
    "[  OK  ] Started fstrim.timer - Discard unused filesystem blocks once a week.",
    "[  OK  ] Started fwupd-refresh.timer - Refresh fwupd metadata regularly.",
    "[  OK  ] Started logrotate.timer - Daily rotation of log files.",
    "[  OK  ] Started man-db.timer - Daily man-db regeneration.",
    "[  OK  ] Started phpsessionclean.timer - Clean PHP session files every 30 mins.",
    "[  OK  ] Started plocate-updatedb.timer - Update the plocate database daily.",
    "[  OK  ] Reached target timers.target - Timer Units.",
    "[  OK  ] Listening on acpid.socket - ACPID Listen Socket.",
    "[  OK  ] Listening on cups.socket - CUPS Scheduler.",
    "[  OK  ] Listening on dbus.socket - D-Bus System Message Bus Socket.",
    "         Starting docker.socket - Docker Socket for the API...",
    "[  OK  ] Listening on pcscd.socket - PC/SC Smart Card Daemon Activation Socket.",
    "         Starting snapd.socket - Socket activation for snappy daemon...",
    "[  OK  ] Listening on sshd-unix-local.socket - OpenSSH Server Socket (systemd-ssh-generator, AF_UNIX Local).",
    "[  OK  ] Listening on systemd-hostnamed.socket - Hostname Service Socket.",
    "[  OK  ] Reached target nfs-client.target - NFS client services.",
    "[  OK  ] Reached target remote-fs-pre.target - Preparation for Remote File Systems.",
    "[  OK  ] Reached target remote-fs.target - Remote File Systems.",
    "[  OK  ] Listening on docker.socket - Docker Socket for the API.",
    "[  OK  ] Listening on snapd.socket - Socket activation for snappy daemon.",
    "[  OK  ] Reached target sockets.target - Socket Units.",
    "[  OK  ] Reached target basic.target - Basic System.",
    "         Starting accounts-daemon.service - Accounts Service...",
    "[  OK  ] Started acpid.service - ACPI event daemon.",
    "         Starting dbus.service - D-Bus System Message Bus...",
    "         Starting e2scrub_reap.service - Remove Stale Online ext4 Metadata Check Snapshots...",
    "[  OK  ] Reached target getty.target - Login Prompts.",
    "[  OK  ] Started snapd.service - Snap Daemon.",
    "[  OK  ] Started gdm.service - GNOME Display Manager.",
    "         Starting systemd-timedated.service - Time & Date Service...",
    "[  OK  ] Finished plymouth-read-write.service - Tell Plymouth To Write Out Runtime Data.",
    "[  OK  ] Mounted proc-sys-fs-binfmt_misc.mount - Arbitrary Executable File Formats File System.",
    "[  OK  ] Finished systemd-binfmt.service - Set Up Additional Binary Formats.",
    "[  OK  ] Finished systemd-tmpfiles-setup.service - Create System Files and Directories.",
    "         Starting binfmt-support.service - Enable support for additional executable binary formats...",
    "         Starting polkit.service - Authorization Manager...",
    "         Starting smartmontools.service - Self Monitoring and Reporting Technology (SMART) Daemon...",
    "         Starting systemd-timesyncd.service - Network Time Synchronization...",
    "         Starting systemd-update-utmp.service - Record System Boot/Shutdown in UTMP...",
    "[  OK  ] Finished systemd-update-utmp.service - Record System Boot/Shutdown in UTMP.",
    "[  OK  ] Finished systemd-tmpfiles-clean.service - Daily Cleanup of Temporary Directories.",
    "[  OK  ] Reached target shutdown.target - Shutdown.",
    "         Starting snapd.service - Snap Daemon...",
    "         Starting systemd-logind.service - User Login Management...",
    "[  OK  ] Started warp-svc.service - Cloudflare Zero Trust Client Daemon.",
    "[  OK  ] Finished e2scrub_reap.service - Remove Stale Online ext4 Metadata Check Snapshots.",
    "[  OK  ] Started smartmontools.service - Self Monitoring and Reporting Technology (SMART) Daemon.",
    "[  OK  ] Finished systemd-logind.service - User Login Management.",
    "[  OK  ] Started polkit.service - Authorization Manager.",
    "[  OK  ] Started accounts-daemon.service - Accounts Service.",
    "         Starting ModemManager.service - Modem Manager...",
    "[  OK  ] Started systemd-hostnamed.service - Hostname Service.",
    "[  OK  ] Started ModemManager.service - Modem Manager.",
    "         Starting NetworkManager-dispatcher.service - Network Manager Script Dispatcher Service...",
    "[  OK  ] Started NetworkManager.service - Network Manager.",
    "[  OK  ] Reached target network.target - Network.",
    "         Starting NetworkManager-wait-online.service - Network Manager Wait Online...",
    "[  OK  ] Started acunetix.service - Acunetix Service.",
    "[  INFO  ] Starting containerd.service - containerd container runtime...",
    "[  INFO  ] Starting cups.service - CUPS Scheduler...",
    "[  INFO  ] Starting mariadb.service - MariaDB 11.4.3 database server...",
    "[  INFO  ] Starting systemd-user-sessions.service - Permit User Sessions...",
    "[  INFO  ] Started NetworkManager-dispatcher.service - Network Manager Script Dispatcher Service.",
    "[  OK  ] Finished systemd-user-sessions.service - Permit User Sessions.",
    " [  INFO  ] Starting gdm.service - GNOME Display Manager...",
    "[  OK  ] Finished NetworkManager-wait-online.service - Network Manager Wait Online.",
    "[  OK  ] Finished dbus.service - D-Bus System Message Bus.",
    "[  OK  ] Started systemd-timedated.service - Time & Date Service.",
    "[  OK  ] Finished polkit.service - Authorization Manager.",
    "[  OK  ] Finished snapd.socket - Socket activation for snappy daemon.",
    "[  OK  ] Finished systemd-timesyncd.service - Network Time Synchronization.",
    "         Starting systemd-update-utmp.service - Record System Boot/Shutdown in UTMP...",
    "[  OK  ] Finished systemd-update-utmp.service - Record System Boot/Shutdown in UTMP.",
    "[  INFO  ] Reached target network-online.target - Network is Online.",
    "................................................................................",
    "................................................................................",
    "................................................................................",
    "Welcome you are logged in.",
  ];

  if (sessionStorage.getItem("bootCompleted") === "true") {
    bootScreen.style.display = "none";
    content.style.display = "block";
    content.style.opacity = 1;
    window.removeEventListener("resize", lockWindowSize);
    return;
  }

  let i = 0;
  let lineCount = 0;
  const chunkSize = 45;

  function displayLine() {
    if (i < lines.length) {
      if (lineCount === chunkSize) {
        bootText.textContent = "";
        lineCount = 0;
      }

      let lineElement = document.createElement("div");
      lineElement.textContent = lines[i];

      lineElement.style.color = Math.random() > 0.9 ? "red" : "white";
      lineElement.style.fontFamily = "monospace";

      bootText.appendChild(lineElement);
      i++;
      lineCount++;

      setTimeout(displayLine, 40);
    } else {
      setTimeout(function () {
        bootScreen.classList.add("blur-effect");

        setTimeout(function () {
          bootScreen.style.display = "none";
          content.style.display = "block";
          content.style.opacity = 1;
          window.removeEventListener("resize", lockWindowSize);

          sessionStorage.setItem("bootCompleted", "true");
        }, 300);
      }, 300);
    }
  }

  displayLine();
};
