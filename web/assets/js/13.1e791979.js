(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{714:function(e,t,s){"use strict";s.r(t);var r=s(7),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[s("a",{attrs:{href:"https://tsanfer.com/views/Computer/Windows_WSL_terminal_WebDAV_PartitionBackup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("最新博客文章链接"),s("OutboundLink")],1)])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("最近发现我 Windows11 上的 WSL 打不开了，一直提示我虚拟化功能没有打开，但我看了下配置，发现虚拟化功能其实是开着的。然后试了各种方法，重装了好几次系统，我一个软件一个软件的试，最后发现是 Spacedesk 与 WSL2 不兼容，只要不装 Spacedesk 就行了。我也正好趁这个机会，配置了一些其他的东西，比如终端的美化，WebDAV 服务器的搭建，硬盘分区的备份等。")]),e._v(" "),s("h2",{attrs:{id:"大体思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大体思路"}},[e._v("#")]),e._v(" 大体思路")]),e._v(" "),s("p",[e._v("先做个U盘启动盘来装 Windows 11 系统，然后配置一下系统和安装各种软件。之后用 Oh My Posh 来美化 PowerShell 和 Linux 终端。然后在局域网内的另一台 Windows 上部署两个 WebDAV 服务，其分别挂载在本地以及阿里云盘。最后再备份了一下系统分区，作用和一键还原备份差不多。")]),e._v(" "),s("h3",{attrs:{id:"用到的东西"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用到的东西"}},[e._v("#")]),e._v(" 用到的东西")]),e._v(" "),s("p",[e._v("配置时最好参考官方的教程")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ventoy.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ventoy"),s("OutboundLink")],1),e._v("：\n"),s("blockquote",[s("p",[e._v("简单来说，Ventoy 是一个制作"),s("strong",[e._v("可启动U盘")]),e._v("的开源工具。")]),e._v(" "),s("p",[e._v("有了 Ventoy 你就无需反复地格式化U盘，你只需要把 ISO/WIM/IMG/VHD(x)/EFI 等类型的文件直接拷贝到U盘里面就可以启动了，无需其他操作。")]),e._v(" "),s("p",[e._v("你可以一次性拷贝很多个不同类型的镜像文件，Ventoy 会在启动时显示一个菜单来供你进行选择。")]),e._v(" "),s("p",[e._v("安装之后，同一个U盘可以同时支持 BIOS 和多种 UEFI 模式。")]),e._v(" "),s("p",[e._v("支持大部分常见类型的操作系统")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WSL"),s("OutboundLink")],1),e._v("：（Windows Subsystem for Linux）\n"),s("blockquote",[s("p",[e._v("适用于 "),s("strong",[e._v("Linux 的 Windows 子系统")]),e._v("可让开发人员按原样运行 GNU/Linux 环境 - 包括大多数命令行工具、实用工具和应用程序 - 且不会产生传统虚拟机或双启动设置开销。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Posh"),s("OutboundLink")],1),e._v("：\n"),s("blockquote",[s("p",[e._v("Oh My Posh is a custom prompt engine for any shell that has the ability to adjust the prompt string with a function or variable.")]),e._v(" "),s("p",[e._v("Oh My Posh 是一个可"),s("strong",[e._v("自定义终端提示符")]),e._v("的软件，它支持任何种类的命令行环境，并能通过函数或变量来配置提示符的字符显示")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cloudreve/Cloudreve",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudreve"),s("OutboundLink")],1),e._v("：\n"),s("blockquote",[s("p",[e._v("Cloudreve 可以让您快速搭建起公私兼备的"),s("strong",[e._v("网盘")]),e._v("系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/messense/aliyundrive-webdav",target:"_blank",rel:"noopener noreferrer"}},[e._v("aliyundrive-webdav"),s("OutboundLink")],1),e._v("：\n"),s("blockquote",[s("p",[s("strong",[e._v("阿里云盘 WebDAV")]),e._v(" 服务，主要使用场景为配合支持 WebDAV 协议的客户端 App 如 Infuse、nPlayer 等实现在电视上直接观看云盘视频内容， 支持上传文件，但受限于 WebDAV 协议不支持文件秒传。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DiskGenius"),s("OutboundLink")],1),e._v("：\n"),s("blockquote",[s("p",[e._v("DiskGenius 是一款专业级的"),s("strong",[e._v("数据恢复")]),e._v("软件；支持文件恢复、分区恢复；文件预览、扇区编辑、加密分区恢复、Ext4分区恢复、RAID恢复等高级功能")]),e._v(" "),s("p",[e._v("DiskGenius 是一款经典的"),s("strong",[e._v("硬盘分区")]),e._v("工具 。创建分区、删除分区、格式化分区、隐藏分区、分配盘符等基本功能外，DiskGenius 还提供快速分区、无损调整分区大小，分区表备份恢复等更多高阶功能。支持GPT分区格式，支持EXT4文件系统。")]),e._v(" "),s("p",[e._v("DiskGenius 还是一款强大的"),s("strong",[e._v("备份")]),e._v("软件，可以方便的备份或克隆硬盘或分区；支持增量备份及多点还原、热备份、系统备份等众多特性。")])])])]),e._v(" "),s("h2",{attrs:{id:"系统重装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统重装"}},[e._v("#")]),e._v(" 系统重装")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.ventoy.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ventoy 官网"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("先做个U盘启动盘出来重装系统，顺便在U盘里放个 PE 系统镜像，方便以后配置电脑。")]),e._v(" "),s("h3",{attrs:{id:"制作-ventoy-u盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#制作-ventoy-u盘"}},[e._v("#")]),e._v(" 制作 Ventoy U盘")]),e._v(" "),s("p",[e._v("安装U盘启动盘时，整个U盘会被格式化，有重要数据的话，记得提前保存")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216194621.png",alt:"https://cdn.tsanfer.com/image/202216194621.png"}})]),e._v(" "),s("p",[e._v("安装完成之后，可以把 Ventoy U盘当成一般的U盘来使用，不会影响U盘的引导。")]),e._v(" "),s("h3",{attrs:{id:"配置-ventoy-插件-ventoyplugson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-ventoy-插件-ventoyplugson"}},[e._v("#")]),e._v(" 配置 Ventoy 插件（ VentoyPlugson ）")]),e._v(" "),s("p",[e._v("Ventoy 支持许多的插件，这里我只配置了“指定搜索目录”，主要是为了加快镜像的搜索速度。当然你也可以不配置，一般搜索镜像的速度都是比较快的。")]),e._v(" "),s("blockquote",[s("p",[e._v("指定搜索ISO文件的根目录。默认Ventoy会搜索U盘上的所有目录和子目录，当你U盘上有海量的文件时，这个过程会很慢。\n这种情况下你可以把ISO文件单独放在某个目录下，然后通过这个变量来指定搜索路径，此时Ventoy就只会搜索该目录及其子目录。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216195527.png",alt:"https://cdn.tsanfer.com/image/202216195527.png"}})]),e._v(" "),s("p",[e._v("Ventoy 插件里面有一个数据持久化插件，如果想在 Linux LiveCD 中保存数据的话，可以试试这个插件。")]),e._v(" "),s("h3",{attrs:{id:"下载系统镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载系统镜像"}},[e._v("#")]),e._v(" 下载系统镜像")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.microsoft.com/zh-cn/software-download/windows11",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软官网 下载 Windows 11"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://kubuntu.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubuntu 官网"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("Windows 和 Linux 的镜像都可以，不过如果要在 Windows 11 上用 QQ 的话，要用简体中文版的镜像。我开始用的英文版镜像，QQ 就一直说我文件损坏，后来改用简体中文版后才正常。")]),e._v(" "),s("p",[e._v("下完了镜像后，就直接把镜像文件复制到U盘里（任意位置都行），当然也可以在U盘里放一些软件安装包，方便装完系统后安装。")]),e._v(" "),s("h3",{attrs:{id:"制作-pe-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#制作-pe-镜像"}},[e._v("#")]),e._v(" 制作 PE 镜像")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.wepe.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("微PE 官网"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("这里我做了个 PE 的镜像文件，放到U盘里，方便以后电脑有什么问题时，可以用U盘进 PE 系统解决。比如，可以用 PE 来修复系统引导，或者恢复系统盘数据等。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216215043.png",alt:"https://cdn.tsanfer.com/image/202216215043.png"}})]),e._v(" "),s("p",[e._v("做好 PE 的 ISO 镜像后，和系统镜像一样，放到U盘里就行。")]),e._v(" "),s("h3",{attrs:{id:"安装系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[e._v("#")]),e._v(" 安装系统")]),e._v(" "),s("ol",[s("li",[e._v("插上U盘，重启电脑，进入 BIOS 选择U盘启动。")]),e._v(" "),s("li",[e._v("然后选择要安装的镜像，电脑问你要系统激活码可以跳过，我选的是 Windows 11 的 Pro 工作站版，感觉这个版本的功能要全一点。")]),e._v(" "),s("li",[e._v("然后就是选择要装到哪个地方，可以先删除之前的分区，然后选择整个硬盘或者某个未分配的区域，来安装系统。")]),e._v(" "),s("li",[e._v("之后就是电脑开始从U盘安装系统了，在电脑读取完了U盘的数据之后，就可以拔掉U盘了，然后等它重启。")]),e._v(" "),s("li",[e._v("之后进入了设置界面，按步骤走就好，唯一要注意的就是账号的登陆。我这选择的是离线登陆，如果你这里选的是在线账号登陆的话，系统用户名就会变成你登陆账号的前几位，以后进命令行也是这个名字。离线登陆的话，进入系统后显示的用户名则是自己输入的名字。")])]),e._v(" "),s("h3",{attrs:{id:"配置系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置系统"}},[e._v("#")]),e._v(" 配置系统")]),e._v(" "),s("p",[e._v("进了系统就是配置各种 Windows 设置里面的东西了，比如改改任务栏软件图标或者删一些不用的软件，最重要的是记得更新系统。当然你也可以对硬盘进行分区，我一般用 "),s("a",{attrs:{href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DiskGenius"),s("OutboundLink")],1),e._v(" 来进行硬盘操作。")]),e._v(" "),s("p",[e._v("我之后重定位了，文档、下载、音乐、图片、视频的文件夹位置，这样就不用以后一个一个更改浏览器或者下载软件里的下载位置了")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216222023.png",alt:"https://cdn.tsanfer.com/image/202216222023.png"}})]),e._v(" "),s("h3",{attrs:{id:"安装软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[e._v("#")]),e._v(" 安装软件")]),e._v(" "),s("p",[e._v("然后就是安装软件了，比如 7z，运行库，Clash（代理软件），Docker 等。有些软件可能需要我们进 Windows 商店里面下载（比如，Ubuntu），我发现如果要进商店的话，要先把 Clash 代理关了，不然进不去。")]),e._v(" "),s("p",[e._v("要想添加开机自启程序的话，可以在文件浏览器的地址栏中输入 "),s("code",[e._v("startup")]),e._v(" ，会自动跳转到开机自启文件夹，我的位置是 "),s("code",[e._v("C:\\Users\\Admin\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup")])]),e._v(" "),s("p",[e._v("这里要特别注意某些软件可能和 WSL2 不兼容，比如 Spacedesk。如果想要用 WSL2 的话，就不要装 Spacedesk（我现在目前 Spacedesk 的最新版为 Beta RC v1.0.29）")]),e._v(" "),s("h3",{attrs:{id:"安装-wsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-wsl"}},[e._v("#")]),e._v(" 安装 WSL")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-manual",target:"_blank",rel:"noopener noreferrer"}},[e._v("旧版 WSL 的手动安装步骤"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("这里我是通过安装 docker 来安装 WSL 的， 不过 docker 安装的是 WSL1，在安装时 docker 会提示你需要升级到 WSL2，官方有教程。")]),e._v(" "),s("p",[e._v("以管理员身份打开 PowerShell 并运行：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("启用适用于 Linux 的 Windows 子系统：")]),e._v(" "),s("p",[s("code",[e._v("dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart")])])]),e._v(" "),s("li",[s("p",[e._v("启用虚拟机功能：")]),e._v(" "),s("p",[s("code",[e._v("dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart")])])]),e._v(" "),s("li",[s("p",[e._v("安装 "),s("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"}},[e._v("WSL2 Linux 内核更新包"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("将 WSL 2 设置为默认版本： "),s("code",[e._v("wsl --set-default-version 2")])])]),e._v(" "),s("li",[s("p",[e._v("安装所选的 "),s("a",{attrs:{href:"https://aka.ms/wslstore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 分发"),s("OutboundLink")],1),e._v("，我这选的是 Ubuntu，安装好后打开，设置一下用户名和密码，就可以正常使用 WSL 了。")])])]),e._v(" "),s("h2",{attrs:{id:"配置终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置终端"}},[e._v("#")]),e._v(" 配置终端")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Posh 官网"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("这里我用的终端是系统自带的 Windows Terminal，然后通过 Oh My Posh 来配置终端，主要是因为它同时支持 Windows 和 Linux。")]),e._v(" "),s("p",[e._v("先装一个 "),s("a",{attrs:{href:"https://github.com/ryanoasis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nerd Font 字体"),s("OutboundLink")],1),e._v(" 防止装完 Oh My Posh 后出现乱码，我装的是 "),s("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/Hack/Regular/complete/Hack%20Regular%20Nerd%20Font%20Complete%20Mono%20Windows%20Compatible.ttf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hack Nerd Font"),s("OutboundLink")],1),e._v("，然后记得更改一下 Windows Terminal 的默认字体就行了。")]),e._v(" "),s("h3",{attrs:{id:"windows-终端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-终端配置"}},[e._v("#")]),e._v(" Windows 终端配置")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://ohmyposh.dev/docs/windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Posh | Installation | Windwos"),s("OutboundLink")],1)])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("安装 Oh My Posh ："),s("code",[e._v("winget install JanDeDobbeleer.OhMyPosh")])])]),e._v(" "),s("li",[s("p",[e._v("替换现有提示符，先用 "),s("code",[e._v("$PROFILE")]),e._v(" 找到 PowerShell 启动时的脚本（没有就在对应位置新建一个同名文件）。比如我的：")]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("PS")]),e._v(" C:\\Users\\Admin> "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$PROFILE")]),e._v("\nD:\\Document\\PowerShell\\Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PowerShell_profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("在 "),s("code",[e._v("Microsoft.PowerShell_profile.ps1")]),e._v(" 脚本文件中添加一行命令 ：")]),e._v(" "),s("p",[s("code",[e._v("oh-my-posh --init --shell pwsh --config ~/jandedobbeleer.omp.json | Invoke-Expression")])]),e._v(" "),s("p",[e._v("之后重启终端，就能看见新的提示符了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216230801.png",alt:"https://cdn.tsanfer.com/image/202216230801.png"}})])]),e._v(" "),s("li",[s("p",[e._v("不过我这里自己更换了另一个更喜欢的主题 "),s("a",{attrs:{href:"https://ohmyposh.dev/docs/themes#craver",target:"_blank",rel:"noopener noreferrer"}},[e._v("craver"),s("OutboundLink")],1),e._v("，如果你不换主题的话，这一步就不用看了。我把刚刚那个 "),s("code",[e._v("Microsoft.PowerShell_profile.ps1")]),e._v(" 脚本里的 "),s("code",[e._v("~/jandedobbeleer.omp.json")]),e._v(" 更改为了 "),s("code",[e._v("~\\AppData\\Local\\Programs\\oh-my-posh\\themes\\craver.omp.json")]),e._v(" ，然后再重启终端就行了。或者直接下载网上 json 文件并配置。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202216234006.png",alt:"https://cdn.tsanfer.com/image/202216234006.png"}})])])]),e._v(" "),s("h3",{attrs:{id:"wsl-终端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wsl-终端配置"}},[e._v("#")]),e._v(" WSL 终端配置")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Zsh 官方安装教程"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("WSL 的配置大体和 PowerShell 一样，不过我是在 oh-my-zsh 的基础上配置的，主要是为了加强终端的功能，这里我用的是 Ubuntu。")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("先更新一下 Ubuntu 系统： "),s("code",[e._v("sudo apt update -y && sudo apt upgrade -y")])])]),e._v(" "),s("li",[s("p",[e._v("安装 zsh, git, vim, unzip： "),s("code",[e._v("sudo apt install zsh git vim unzip -y")])])]),e._v(" "),s("li",[s("p",[e._v("设置 zsh 为默认 shell: "),s("code",[e._v("chsh -s $(which zsh)")]),e._v(" (或 chsh -s zsh)")])]),e._v(" "),s("li",[s("p",[e._v("设置 WSL2 代理，后面从 Github 下载文件时可能会有 HTTP 的 443 错误，需要我们使用代理，这里我用的是 Clash，端口号默认为 7890。如果不使用代理的话，从 Github 上下载文件可能会很慢。")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("~/.zshrc")]),e._v(" 文件最后添加如下脚本代码，以后每次 zsh 启动时都会执行下面的代码，可以用刚刚安装的 Vim 打开"),s("code",[e._v("~/.zshrc")]),e._v(" 并添加代码。")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("hostip")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/resolv.conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -oP "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'(?<=nameserver\\ ).*'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("https_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${hostip}")]),e._v(':7890"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${hostip}")]),e._v(':7890"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("安装 oh-my-zsh:")]),e._v(" "),s("p",[s("code",[e._v('sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"')])])]),e._v(" "),s("li",[s("p",[e._v("配置 oh-my-zsh 插件，比如：")]),e._v(" "),s("p",[e._v("安装 zsh-autosuggestions （可以自动提示以前输过的命令）：")]),e._v(" "),s("p",[s("code",[e._v("git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions")])]),e._v(" "),s("p",[e._v("安装 zsh-syntax-highlighting（可以使命令行的命令高亮）：")]),e._v(" "),s("p",[s("code",[e._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting")])]),e._v(" "),s("p",[e._v("然后在 "),s("code",[e._v("~/.zshrc")]),e._v(" 文件已有的 plugins 的字段中添加插件名称，例如")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("plugins=(\n    git\n    zsh-autosuggestions\n    zsh-syntax-highlighting\n)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("同样的安装 Oh My Posh，就直接跟着官网的教程走就行。")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://ohmyposh.dev/docs/linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Posh | Installation | Linux"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("下载 oh my posh：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x /usr/local/bin/oh-my-posh\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("下载主题：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" ~/.poshthemes\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" ~/.poshthemes/themes.zip -d ~/.poshthemes\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" u+rw ~/.poshthemes/*.json\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/.poshthemes/themes.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("替换现有提示符，在 "),s("code",[e._v("~/.zshrc")]),e._v(" 最后添加下面的代码：")]),e._v(" "),s("p",[s("code",[e._v('eval "$(oh-my-posh --init --shell zsh --config ~/jandedobbeleer.omp.json)"')])]),e._v(" "),s("p",[e._v("当然也可以把"),s("code",[e._v("jandedobbeleer")]),e._v(" 改成其他喜欢的主题，比如我改成了：")]),e._v(" "),s("p",[s("code",[e._v('eval "$(oh-my-posh --init --shell zsh --config ~/.poshthemes/craver.omp.json)"')])]),e._v(" "),s("p",[e._v("然后重启终端就行了")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217163854.png",alt:"https://cdn.tsanfer.com/image/202217163854.png"}})])])]),e._v(" "),s("h2",{attrs:{id:"部署局域网-webdav-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署局域网-webdav-服务器"}},[e._v("#")]),e._v(" 部署局域网 WebDAV 服务器")]),e._v(" "),s("p",[e._v("我用局域网内的另外一台 Windows 来做下载器，在其上安装了 "),s("a",{attrs:{href:"https://github.com/cloudreve/Cloudreve",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudreve"),s("OutboundLink")],1),e._v(" 以及 "),s("a",{attrs:{href:"https://github.com/messense/aliyundrive-webdav",target:"_blank",rel:"noopener noreferrer"}},[e._v("aliyundrive-webdav"),s("OutboundLink")],1),e._v(" 来实现 Webdav，操作则用 Windows 自带的远程桌面来控制。cloudreve 主要是用来在两台 Windows 之间传输文件的，aliyundrive-webdav 则是部署阿里云盘的 webdav 服务。webdav 的客户端的话，我则是用的是 "),s("a",{attrs:{href:"https://www.raidrive.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raidrive"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"配置-windows-远程桌面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-windows-远程桌面"}},[e._v("#")]),e._v(" 配置 Windows 远程桌面")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://support.microsoft.com/zh-cn/windows/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2-5fe128d5-8fb1-7a23-3b8a-41e636865e8c#ID0EDD=Windows_11",target:"_blank",rel:"noopener noreferrer"}},[e._v("微软官方配置远程桌面教程"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("先在被控制的电脑上打开远程控制，然后找到其的 IP 地址。比如我用 "),s("code",[e._v("ipconfig")]),e._v(" 找到本地的 IPv4 地址为 "),s("code",[e._v("192.168.1.7")]),e._v(" 。当然，你也可以不用远程控制，直接在另一台 Windows 电脑面前操作。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217174614.png",alt:"https://cdn.tsanfer.com/image/202217174614.png"}})]),e._v(" "),s("p",[e._v("这里最好配置一下路由器的 DHCP ，为其静态分配一个固定的 IP 地址，以后连的时候就不用再看地址了。然后在控制端打开远程桌面连接，输入被控制电脑的 IP 地址，连上就行了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217180038.png",alt:"https://cdn.tsanfer.com/image/202217180038.png"}})]),e._v(" "),s("h3",{attrs:{id:"配置-cloudreve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-cloudreve"}},[e._v("#")]),e._v(" 配置 Cloudreve")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/cloudreve/Cloudreve",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudreve Github 地址"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("在被控制的电脑中打开 "),s("code",[e._v("cloudreve.exe")]),e._v(" 即可，第一次启动时会提示一次用户名和密码，以后启动时就没有提示了，所以要注意保存。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217173410.png",alt:"https://cdn.tsanfer.com/image/202217173410.png"}})]),e._v(" "),s("p",[e._v("然后在浏览器打开 "),s("code",[e._v("localhost:5212")]),e._v(" 就能看见 Cloudreve 的前端网页了，之后添加一个 WebDAV 账号，它默认使用的是本地（被控制设备）存储，这样就能在两台电脑之间传输文件了。其实远程桌面连接，支持直接复制粘贴文件，不过每次都要打开远程桌面手动复制粘贴，有点麻烦。")]),e._v(" "),s("p",[e._v("Cloudreve 默认每个用户的容量为 1G，可以进 cloudreve 的后台更改用户组的容量设置。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217221623.png",alt:"https://cdn.tsanfer.com/image/202217221623.png"}})]),e._v(" "),s("p",[e._v("之后就是在主控制端的 Windows 上装 Webdav 客户端了，我用的是 "),s("a",{attrs:{href:"https://www.raidrive.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raidrive"),s("OutboundLink")],1),e._v(" 因为其可以挂载 One Drive 和 Google Drive 等的其他存储方式，而且配置功能也比较丰富。下面是刚刚配置的 Cloudreve 的 raidrive 配置，比如，端口 "),s("code",[e._v("5212")]),e._v("，路径默认"),s("code",[e._v("/dav")]),e._v(" ，用户名默认 "),s("code",[e._v("admin@cloudreve.org")]),e._v(" ，密码则是刚刚创建的 Webdav 新账号的密码")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217181916.png",alt:"https://cdn.tsanfer.com/image/202217181916.png"}})]),e._v(" "),s("h3",{attrs:{id:"配置-aliyundrive-webdav"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-aliyundrive-webdav"}},[e._v("#")]),e._v(" 配置 aliyundrive-webdav")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/messense/aliyundrive-webdav",target:"_blank",rel:"noopener noreferrer"}},[e._v("aliyundrive-webdav Github 地址"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("我把阿里云盘的 webdav 服务放在了被控制的 windows 上一直开着，比较方便，而且局域网内的其他设备也可以用。下面跟着 Github 上的说明走就行，我是用 docker 部署的服务：")]),e._v(" "),s("p",[s("code",[e._v("docker run -d --name=aliyundrive-webdav --restart=unless-stopped -p 8080:8080 -v /etc/aliyundrive-webdav/:/etc/aliyundrive-webdav/ -e REFRESH_TOKEN='your refresh token' -e WEBDAV_AUTH_USER=admin -e WEBDAV_AUTH_PASSWORD=admin messense/aliyundrive-webdav")])]),e._v(" "),s("p",[e._v("等同于在 Powershell 中的")]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("name=aliyundrive-webdav "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("restart=unless-stopped "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p 8080:8080 `\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc/aliyundrive-webdav/:"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc/aliyundrive-webdav/ `\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e REFRESH_TOKEN="),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'your refresh token'")]),e._v(" `\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e WEBDAV_AUTH_USER=admin `\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e WEBDAV_AUTH_PASSWORD=admin `\n  messense/aliyundrive-webdav\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("ul",[s("li",[s("p",[s("code",[e._v("-v")]),e._v(" ：绑定的卷，这里的这个卷主要是用来存放阿里云盘的 refresh_token。")]),e._v(" "),s("p",[e._v("前面的那个"),s("code",[e._v("/etc/aliyundrive-webdav/")]),e._v(" 是 windows 里的地址（我随便改了个 "),s("code",[e._v("~/")]),e._v(" 地址）")]),e._v(" "),s("p",[e._v("后面的那个"),s("code",[e._v("/etc/aliyundrive-webdav/")]),e._v(" 是 docker 容器里的地址")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("-e")]),e._v(" ：环境变量")]),e._v(" "),s("p",[s("code",[e._v("REFRESH_TOKEN")]),e._v(" ：阿里云盘 refresh_token （获得方法的话，作者在 Github 上有说）")]),e._v(" "),s("p",[s("code",[e._v("WEBDAV_AUTH_USER")]),e._v(" ：想要设置的 WebDAV 服务的用户名（我直接默认的）")]),e._v(" "),s("p",[s("code",[e._v("WEBDAV_AUTH_PASSWORD")]),e._v(" ：想要设置的 WebDAV 服务的密码（我直接默认的）")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202217235135.png",alt:"https://cdn.tsanfer.com/image/202217235135.png"}})]),e._v(" "),s("p",[e._v("被控制的 Windows 上的 docker 运行正常后，就可以在主控制端配置 webdav 了，我顺便还连上了 OneDrive 和 Google Drive")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202218154455.png",alt:"https://cdn.tsanfer.com/image/202218154455.png"}})]),e._v(" "),s("h2",{attrs:{id:"备份分区-磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份分区-磁盘"}},[e._v("#")]),e._v(" 备份分区/磁盘")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.diskgenius.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DiskGenius 官网"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("这次配置系统，不知道出了多少的问题（主要是因为 Spacedesk 和 WSL2 不兼容的问题），还把机械硬盘弄成了动态卷，然后又一不小心把机械硬盘的分区弄坏了。后来用 DiskGenius 重建分区表都只恢复了部分分区，感觉以后随时都要注意备份分区和硬盘了。我前面弄的那个阿里云盘 webdav 主要也是为了方便保存一些数据和系统备份镜像，以免本地电脑出问题后花时间来重新配置系统。")]),e._v(" "),s("p",[e._v("这里备份的时候，有两种主要的方式：备份与克隆")]),e._v(" "),s("p",[e._v("备份只是生成一个镜像文件，不会覆盖其他分区的数据，而且镜像文件移动起来也比较方便。如果还嫌麻烦的话，就直接用各种一键还原的软件，还能自动的帮你装启动项和做U盘启动盘，貌似 DiskGenius 官方就有一个叫"),s("a",{attrs:{href:"https://www.onekeyrestore.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("易数一键还原"),s("OutboundLink")],1),e._v("的工具。")]),e._v(" "),s("p",[e._v("克隆则是直接把一个分区（或硬盘）的所有数据复制到另一个分区（或硬盘），而且会覆盖掉另一个分区原有的数据。所以我个人认为，分区备份要方便一点，当然如果要进行系统迁移的话，还是最好用克隆硬盘的方式。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.tsanfer.com/image/202218172311.png",alt:"https://cdn.tsanfer.com/image/202218172311.png"}})]),e._v(" "),s("p",[e._v("这以后如果在云端能做的事情，我就尽量在线上操作算了，这样就不用注意本地备份的问题了。")]),e._v(" "),s("hr"),e._v(" "),s("blockquote",[s("p",[e._v("本文由 "),s("a",{attrs:{href:"https://tsanfer.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tsanfer's Blog"),s("OutboundLink")],1),e._v(" 发布！")])])])}),[],!1,null,null,null);t.default=a.exports}}]);