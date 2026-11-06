**_Pedro Cisdeli, Gustavo Santiago, German Mandrini, Ignacio Ciampitti_**

> Originally published in The Kernel – Indiana Corn Update, [Issue #20](https://ag.purdue.edu/news/department/agry/kernel-news/2025/09/_docs/indiana-corn-update-issue20.pdf) (September 5, 2025), Purdue University Department of Agronomy.

Farmers want to predict corn yields before harvest as this can help with management decisions, from application of late-season inputs (e.g., fungicides) to planning harvest logistics. Traditionally, corn yield estimates are obtained by walking fields, shucking ears, and counting kernels, which are both time- and labor-intensive.

Our team at Purdue tested a new approach, using field images of corn ears in husk during the late part of the growing season (R4–R6) to estimate ear size and yield. This could save time in the field and give corn farmers yield insights earlier in the growing season.

## Field Imaging

To test this idea, we captured pictures of corn ears in husk using both a smartphone camera and a depth camera. The smartphone provides a regular photo, while the depth camera adds distance information, which helps describe the shape of the ear, and calculate its length, diameter and volume.

The depth sensing is available in many modern smartphones and tablets. This means that regular devices can be used in the field and cameras can be easily mounted on farm machinery, which opens the door for scaling this method into automated scouting and real-time monitoring during field operations. Figure 1 shows an example of the imaging system used on this project.

<div class="figure-grid">

![Figure 1. Example of a maize ear in the field. Top shows a photo taken with a regular camera, bottom shows the corresponding depth map. Depth information is what allows us to calculate the ear's size directly in the field.|ratio=335x578](corn_ear_yield_fig1.png)

![Figure 2. Computer vision automatically identifies the maize ear (top) and removes the background, leaving a clean depth map of the ear only (bottom).|ratio=329x559](corn_ear_yield_fig2.png)

![Figure 3. Examples of maize ears segmented successfully under difficult conditions. The top image shows an ear identified despite light obstruction from surrounding leaves. The image on the bottom shows an ear segmented correctly even under strong sunlight and over-exposure.|ratio=376x564](corn_ear_yield_fig3.png)

</div>

## Detecting and Isolating the Ear

A computer vision software was trained to automatically find the ear in the image and remove the background (Figure 2). Once the corn ear is isolated, the depth data can be cropped to show only the ear (Figure 2). This helps to build a clean 3D-like representation that can be measured.

## Robustness in the Field

Capturing images inside the corn canopy is not easy. Leaves and shadows often block the view, and sunlight can create glare or over-exposure. Despite these challenges, the system was able to consistently find and segment ears (Figure 3). This is important because it means the method is effective under the conditions encountered during scouting.

## Yield Forecasting

The final step is to forecast yield. Our corn ear estimation approach predicted grain yield per ear with strong accuracy compared to the observed harvested yield data (Figure 4).

![Figure 4. Actual corn ear yield compared with the predicted yield. The dashed line shows perfect agreement, and the yellow regression line shows that predictions closely follow measured values, highlighting that ear traits from field images can be used for early yield forecasting.|width=520px](corn_ear_yield_fig4.png)

## Looking Ahead

In the near future, corn farmers will be able to use a smartphone-based digital tool to scout their fields and take photos of ears, reducing labor and obtaining yield information earlier in the season. This data will help them to plan for use of inputs considering their potential return of investment (ROI), and develop better plans for harvest logistics.

From the research side, our next steps are to expand testing to include earlier stages (R1–R6), closer to flowering time, and across more corn hybrids.

To learn more, visit the [Maize Ear Sensing project page](/projects/maize-ear-sensing).
