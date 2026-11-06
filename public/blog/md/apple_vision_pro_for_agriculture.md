**_Pedro Cisdeli, Gustavo Santiago, German Mandrini, Ignacio Ciampitti_**

> Originally published in The Kernel – Indiana Corn Update, [Issue #23](https://ag.purdue.edu/news/department/agry/kernel-news/2025/09/_docs/indiana-corn-update-issue23.pdf) (September 26, 2025), Purdue University Department of Agronomy.

The Apple Vision Pro (Figure 1) is a device that provides an Augmented Reality (AR) environment for its users. Rather than looking at a computer or phone screen, users wear the device like a pair of goggles, keeping their surroundings in view while accessing digital tools directly in front of them.

![Figure 1. PhD student Gustavo Santiago (Ciampitti Lab) wearing the Vision Pro headset while collecting data on wheat plots.|width=100%](avp_ag_fig1.jpg)

Figure 2 illustrates the AR environment. The Vision Pro projects the digital menu into the user's field of view, giving the impression that it floats in midair, while the crops remain visible.

![Figure 2. Example of the Vision Pro interface projecting a digital menu in thin air.|width=100%](avp_ag_fig2.jpg)

## Potential on the Farm

While analyzing this device's capabilities for agriculture, we have to consider its initial stages of development. We are on the way to providing new case studies on how to use this device for the future of agriculture. Improvement is still needed for this type of device to be widely used in field settings, but it is already a significant achievement in moving away from conventional screens. This raises the most relevant question: what can it actually do on a farm today?

The Vision Pro can already integrate many existing apps, such as Microsoft Excel and Google Maps, into the AR space. This means that most daily tasks performed on an iPad or iPhone can easily be transitioned to the Vision Pro. This [video](/blog/video/avp_rec.mp4) demonstrates how this device was used during a field scouting process to look for plots that had already reached R1 and annotate this data in an Excel file.

The Apple Vision Pro stands out for its array of cameras and sensors. These can be used to run automated digital phenotyping pipelines, which we discussed in a previous article ([A Faster Way to Predict Corn Yields Using Ear Images Before Harvest](/news/corn-ear-yield-prediction)). The device's hardware can gather measurements such as plant height and leaf area without the need for additional equipment. Additionally, the Vision Pro's cameras and sensors can help perform on-device 3D scene reconstruction by simply walking around a plant while looking at it with the goggles. Doing this type of data collection on a temporal basis can be used to automatically monitor crop growth.

![Figure 3. Example of the object detection performed directly by the Apple Vision Pro. The AI model draws boxes and labels each one of them based on what it predicts that the object is.|width=100%](avp_ag_fig3.jpg)

## Our Progress So Far

Our team has been developing a custom app for the Vision Pro that focuses on agricultural capabilities. The app will aid in scouting and perform digital plant phenotyping, among other things. We plan to transition most of our existing research methods and artificial intelligence models to this device.

The app is already able to display field-specific data overlaid directly onto the physical environment, show interactive field maps to help researchers navigate and locate themselves within large experimental areas, and read QR codes to quickly access plot information during trial evaluations.

Additionally, as shown in Figure 3, our app supports on-device object detection. With reliable plant and object recognition capabilities running directly on the headset, we can implement automated measurement tools, disease detection, and real-time yield estimation directly in the field. This eliminates the need to collect images and process them later on another device.

For more technical details about the development process, challenges, and specific implementation methods, you can follow the [developer log](/news/building-for-apple-vision-pro-1) (from Pedro Cisdeli). The goal is to keep records of the process of exploring and adapting this unique device for agricultural use throughout this journey.
