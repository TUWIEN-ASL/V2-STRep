window.PROJECT_DATA = {"tasks": [{"id": "apple", "name": "Apple placement", "folder": "apple_2", "transfer": "apple_pose_0_1", "geometry": "Point", "instruction": "Place the apple at the center of the plate.", "success": "5/5", "source": {"src": "static/videos/apple-source.mp4", "poster": "static/images/apple-source.jpg"}, "ours": {"src": "static/videos/apple-ours.mp4", "poster": "static/images/apple-ours.jpg"}, "dream": {"src": "static/videos/apple-dream.mp4", "poster": "static/images/apple-dream.jpg"}, "nova": {"src": "static/videos/apple-nova.mp4", "poster": "static/images/apple-nova.jpg"}, "transferSource": {"src": "static/videos/apple-transfer-source.mp4", "poster": "static/images/apple-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/apple-transfer.mp4", "poster": "static/images/apple-transfer.jpg"}}, {"id": "bottle", "name": "Bottle placement", "folder": "bottle_4", "transfer": "bottle_pose_0_0", "geometry": "Point + normal", "instruction": "Place the bottle on the plate, keeping it upright.", "success": "5/5", "source": {"src": "static/videos/bottle-source.mp4", "poster": "static/images/bottle-source.jpg"}, "ours": {"src": "static/videos/bottle-ours.mp4", "poster": "static/images/bottle-ours.jpg"}, "dream": {"src": "static/videos/bottle-dream.mp4", "poster": "static/images/bottle-dream.jpg"}, "nova": null, "transferSource": {"src": "static/videos/bottle-transfer-source.mp4", "poster": "static/images/bottle-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/bottle-transfer.mp4", "poster": "static/images/bottle-transfer.jpg"}}, {"id": "bar", "name": "Bar tapping", "folder": "tap_0", "transfer": "tap_pose_0_2", "geometry": "Point + normal", "instruction": "Tap the wooden plate with the bar.", "success": "5/5", "source": {"src": "static/videos/bar-source.mp4", "poster": "static/images/bar-source.jpg"}, "ours": {"src": "static/videos/bar-ours.mp4", "poster": "static/images/bar-ours.jpg"}, "dream": {"src": "static/videos/bar-dream.mp4", "poster": "static/images/bar-dream.jpg"}, "nova": {"src": "static/videos/bar-nova.mp4", "poster": "static/images/bar-nova.jpg"}, "transferSource": {"src": "static/videos/bar-transfer-source.mp4", "poster": "static/images/bar-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/bar-transfer.mp4", "poster": "static/images/bar-transfer.jpg"}}, {"id": "drawer", "name": "Drawer matching", "folder": "drawer_3", "transfer": "drawer_pose_0_0", "geometry": "Full 6D pose", "instruction": "Open the upper drawer to match the lower drawer’s extension.", "success": "5/5", "source": {"src": "static/videos/drawer-source.mp4", "poster": "static/images/drawer-source.jpg"}, "ours": {"src": "static/videos/drawer-ours.mp4", "poster": "static/images/drawer-ours.jpg"}, "dream": {"src": "static/videos/drawer-dream.mp4", "poster": "static/images/drawer-dream.jpg"}, "nova": {"src": "static/videos/drawer-nova.mp4", "poster": "static/images/drawer-nova.jpg"}, "transferSource": {"src": "static/videos/drawer-transfer-source.mp4", "poster": "static/images/drawer-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/drawer-transfer.mp4", "poster": "static/images/drawer-transfer.jpg"}}, {"id": "microwave", "name": "Microwave opening", "folder": "micro_1", "transfer": "micro_pose_0_1", "geometry": "Axis", "instruction": "Open the microwave door halfway.", "success": "5/5", "source": {"src": "static/videos/microwave-source.mp4", "poster": "static/images/microwave-source.jpg"}, "ours": {"src": "static/videos/microwave-ours.mp4", "poster": "static/images/microwave-ours.jpg"}, "dream": {"src": "static/videos/microwave-dream.mp4", "poster": "static/images/microwave-dream.jpg"}, "nova": {"src": "static/videos/microwave-nova.mp4", "poster": "static/images/microwave-nova.jpg"}, "transferSource": {"src": "static/videos/microwave-transfer-source.mp4", "poster": "static/images/microwave-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/microwave-transfer.mp4", "poster": "static/images/microwave-transfer.jpg"}}, {"id": "wiping", "name": "Table wiping", "folder": "sponge_0", "transfer": "sponge_pose_0_0", "geometry": "Plane", "instruction": "Wipe the black mark on the table.", "success": "4/5", "source": {"src": "static/videos/wiping-source.mp4", "poster": "static/images/wiping-source.jpg"}, "ours": {"src": "static/videos/wiping-ours.mp4", "poster": "static/images/wiping-ours.jpg"}, "dream": {"src": "static/videos/wiping-dream.mp4", "poster": "static/images/wiping-dream.jpg"}, "nova": {"src": "static/videos/wiping-nova.mp4", "poster": "static/images/wiping-nova.jpg"}, "transferSource": {"src": "static/videos/wiping-transfer-source.mp4", "poster": "static/images/wiping-transfer-source.jpg"}, "transferRobot": {"src": "static/videos/wiping-transfer.mp4", "poster": "static/images/wiping-transfer.jpg"}}], "adaptations": [{"id": "lemon", "folder": "lemon", "name": "Select a different object", "source": "Place the apple at the center of the plate.", "deployment": "Place the lemon at the center of the plate.", "explanation": "The object changes from apple to lemon while the acquired placement skill is reused.", "sourceVideo": {"src": "static/videos/apple-transfer-source.mp4", "poster": "static/images/apple-transfer-source.jpg"}, "robot": {"src": "static/videos/lemon-adapt.mp4", "poster": "static/images/lemon-adapt.jpg"}}, {"id": "target", "folder": "sponge", "name": "Select a different target", "source": "Wipe the black mark at the center of the table.", "deployment": "Wipe the black mark near the wooden plate.", "explanation": "With two marks in the scene, the deployment instruction selects the intended target.", "sourceVideo": {"src": "static/videos/wiping-transfer-source.mp4", "poster": "static/images/wiping-transfer-source.jpg"}, "robot": {"src": "static/videos/target-adapt.mp4", "poster": "static/images/target-adapt.jpg"}}, {"id": "orientation", "folder": "bottle", "name": "Change the orientation requirement", "source": "Place the bottle at the center of the plate.", "deployment": "Place the bottle at the center of the plate, with no orientation requirement.", "explanation": "Removing the upright requirement allows the bottle to be placed in a different orientation.", "sourceVideo": {"src": "static/videos/bottle-transfer-source.mp4", "poster": "static/images/bottle-transfer-source.jpg"}, "robot": {"src": "static/videos/orientation-adapt.mp4", "poster": "static/images/orientation-adapt.jpg"}}]};

(() => {
  const commonInstructions =
    "The human hand should not visually obscure the manipulated object. " +
    "The robot in the scene should not move. " +
    "The camera holds a still pose, no zooming in or out.";

  const taskPrompts = {
    bottle:
      "A human hand slowly lifts up the bottle, then moves it to the " +
      "top center of the plate, and finally places it on the plate.",

    microwave:
      "A human hand slowly opens the door of the microwave, " +
      "leaving it only half open.",

    drawer:
      "A human hand slowly opens the upper drawer to match " +
      "the lower drawer pose.",

    wiping:
      "A human hand slowly moves the sponge to the black mark " +
      "at the center of the table and lightly wipes it away.",

    bar:
      "A human hand slowly lifts up the bar, moves it to the top center " +
      "of the wooden plate, and slowly moves the bar up and down " +
      "to tap the plate several times.",

    apple:
      "A human hand slowly lifts up the apple, moves it to the " +
      "top center of the plate, and places it on the plate."
  };

  window.PROJECT_DATA.tasks.forEach((task) => {
    if (taskPrompts[task.id]) {
      task.instruction =
        `${taskPrompts[task.id]} ${commonInstructions}`;
    }
  });
})();
