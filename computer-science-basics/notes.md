# Computer Science Basics Notes

Course Code: CU75002V2

Computer Science Basiscs aims at helping students understand the principles of computer science that they're going to see later in their careers. It helps to determine why they're expected, supposed or required to do certain things to achieve their goals.

## History

Nothing just happens, netiher did computer science. Let's look back at a little history of our lovely workfield. Our journey starts long ago: 2500BC was the first thing represented a computer created: the abacus, in a certain scence it could change state and hold that state. The abacus was followed around 87BC by the Antikythera, a device to calculate solar eclipses.

Between 1500 and 1650, the solar clock and the pendulum clock were invented. The first mention of the word computer was by Richard Baithwaite in 1613, refering to women; a defition that stuck around untill 1950. Gottfried Leibniz was first talking about computers as machines in the early 1700's. He invented the step reckoner, a device capable of deviding. Something that early personal computer like the Apple II couldn't do.

Charles Babbage designed that first general purpose computer around 1850, Ada Lovelace designed the first concept of a programming language for said machine. Both were recreated in the early 2000's and proven functional.

Herman Hollerith in the early 1900's was the first person to make an electromechanical computer used for counting the population in de United States. He create a company called Tabulating Machine Company (TMC) which later became IBM.

Calculus experienced fast development during this time, thanks to people loving to kill each other. This becomes clear when looking at range tables from marine forces. Allen Turing was able to break Enigma Code using a relay computer. He only got recognized for his achievement in 2012 due to being gay.

During the early 40's, relays were developed from lamp technology. In the late 50's, these again got developed into transistors based on the same principles we're using today. At this time, programming was done in ones and zeros. This changed with the introduction of Fortran (formula translator). which used the introduction of core memory to store data. C and Unix came in 1970.

1965 Saw the rise of datacenters, with IBM using 2,5 MB tapes to store data. They were the first company to make money from renting out computing power. In 1980 saw the introduction of the commodore, 1990 the gameboy; the best chess player on the planet got defeated by a computer and the internet was invented by CERN.

In 2007 WiFi and TB-HDD's were getting usable. The iPhone announced the start of the modern computing era. And in 2013 the Xbox One had more compute power than available on planet Earth in 2007. The next chapter in mankind's information age is artificial intelligence.

## What's a computer

Computers nowadays can be everything, from the desktops and laptop; to smartphones and tablets; all the way to your fridge. All of these have similar internal components. External components are considered input- or output devices. which can have lots of ways to connect.

* CPU (Central Processing Unit) is the brains of the computer, speeds is measured in Hz. It's made up of independent processing units called *cores*. It contains cache which is the CPU's own piece of memory.
* RAM (Random Access Memory) is the memory where your computer stores temporary data, also known as working memory. When the computer turns off ; the memory stored is gone. When it's full, virtual memory is used instead.
* SSD (Solid State Drive) and HDD (Hard Disk Drive) are secondairy memory, used for the storage of files. There are several connectors: IDE, SATA, NVMe and mSATA. Other secondairy memory includes: floppies, usb-sticks and cd's.
* GPU (Graphical Processing Unit) is a computational power house used to process graphics and recently data sets.
* Motherboard, the place where everything comes together.

The operating system is what links the software with the hardware. The included kernel is what does the real magic; whether it's the Windows NT kernel, the linux kernel, the BSD kernel or any other. They manage the resources. The operating system and the kernel together manage everything inside your computer.

1. Processor Management: the scheduler gives every program their fair share of CPU power.
2. Memory Management: what goes where and how much?
3. Device Management: interacting with devices using drivers. Presenting interface (CLI/GUI) to do this.
4. Security: Who can change what, what can accessed by which process.