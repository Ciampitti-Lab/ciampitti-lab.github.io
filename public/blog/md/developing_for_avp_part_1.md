**_Pedro Cisdeli_**

# Static detection, live-camera hurdles, and the APIs we can already use

> **This post kicks off a short series documenting my hands-on journey building ag-tech tools for Apple Vision Pro (AVP).**

---

<div style="
  max-width: min(1000px, 95vw);
  margin: clamp(20px, 5vw, 40px) auto;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border: 2px solid #CEB991;
  border-radius: clamp(12px, 2vw, 16px);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 10px 30px rgba(206, 185, 145, 0.2), 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
">
  <div style="
    padding: clamp(20px, 4vw, 32px);
    flex: 1 1 300px;
    min-width: 0;
    background: linear-gradient(135deg, rgba(206, 185, 145, 0.05), rgba(206, 185, 145, 0.02));
    position: relative;
  ">
    <div style="
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #CEB991, #B8A082);
    "></div>
    <h3 style="
      font-weight: 700;
      font-size: clamp(1.2rem, 3vw, 1.5rem);
      margin-bottom: clamp(12px, 2vw, 16px);
      color: #CEB991;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.025em;
    ">Introduction</h3>
    <p style="
      color: #e0e0e0;
      line-height: 1.6;
      font-size: clamp(0.9rem, 2vw, 1rem);
      margin: 0;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    ">
    The Ciampitti Lab got its hands on an Apple Vision Pro (AVP) thanks to Apple and Purdue University, and I'm excited to explore how it can help us in our agricultural research.
    My goal is to build tools that can assist in digital plant phenotyping, data collection, and other ag-tech applications.
    Additionally, I want to share my journey with the community, so that others can benefit from the knowledge I gain along the way.
    </p>
  </div>
  <div style="
    flex: 0 1 auto;
    min-width: min(100%, 350px);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(15px, 3vw, 20px);
  ">
    <video 
      src="/blog/video/avp_rec.mp4" 
      controls
      style="
        width: 100%;
        max-width: min(400px, 90vw);
        height: auto;
        border-radius: clamp(8px, 1.5vw, 12px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(206, 185, 145, 0.3);
        transition: transform 0.3s ease;
      "
      onmouseover="this.style.transform='scale(1.02)'"
      onmouseout="this.style.transform='scale(1)'"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>

---

---

## 1. Static image / video object detection

**Goal achieved, with a few twists.**

- **Core ML export needs built-in NMS.** Converting my YOLO v11 model required:
  ```python
  model.export(format="coreml", nms=True, task="detect")
  ```
  Without `nms=True`, Vision returns raw tensors instead of neat `VNRecognizedObjectObservation` results.
- **Segmentation quirks:** YOLO-Seg exports run, but Vision treats their mask output as a generic multi-array, no automatic drawing or post-processing.
  In the near future, I will make my code for interpreting the segmentation model output available.
- **Outcome:** With a detection-only model and the standard `confidence` + `coordinates` outputs, AVP happily runs inference on still photos and saved videos.

![Static Image Detection on AVP Simulator via MLCore and Swift (Image credits: Ultralytics)|width=600px](/blog/img/avp_img_detection.png)

---

## 2. Live camera feed: the gatekeeper

- **Raw passthrough access is enterprise-only (visionOS 2+).** Public-store apps can't touch the main cameras for privacy reasons; access is behind the entitlement `com.apple.developer.arkit.main-camera-access.allow`.
- We are working on obtaining the necessary entitlement. In the meantime, I'm focusing on what's already possible with the publicly available ARKit stack—which offers
  a lot of capabilities for ag-tech applications, as detailed in topic #3 below.

---

## 3. What's already possible with the open ARKit stack

Even without live camera frames, AVP offers built-in functionalities for spatial data that can power practical ag-research tools:

| Capability                          | API                                      | Ag use-cases                                                                                                                                         |
| ----------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mesh reconstruction**             | `SceneReconstructionProvider`            | Digital plant phenotyping and data collection for digital twins by analysing the 3D mesh.                                                            |
| **Plane & image anchors**           | `ARPlaneAnchor`, `ARImageAnchor`         | Tag field sensors or seed bags with QR/ArUco markers and pop up live metadata when viewed.                                                           |
| **LiDAR depth on still photos**     | Photo-capture sheet + `AVDepthData`      | More digital phenotyping without destructive sampling (check out [Cisdeli et al., 2025](https://ciampitti-lab.github.io/projects/maize-ear-sensing)). |
| **Photogrammetry (Object Capture)** | `ObjectCaptureSession`                   | Generate watertight meshes of cobs, leaves, or plants for later analysis.                                                                            |
| **External video ingestion**        | `AVSampleBufferDisplayLayer`, WebRTC/NDI | Stream a drone or tractor camera feed into AVP, run Core ML locally, and overlay detections.                                                         |

---

## Next up in the series

1. Implementing the functionalities discussed in topic #3.
2. Testing the live camera feed once we get the entitlement.

Stay tuned!
