import { baseURL } from "./URL";

export function rewGet(rewDesc) {
  var rewImg;
  //Event Gifts Start
  if (rewDesc?.includes("Warrior")) {
    rewImg = baseURL + "/streamkar/gifts/40001667.png";
  } else if (rewDesc?.includes("Game World")) {
    rewImg = baseURL + "/streamkar/gifts/40011722.png";
  } else if (rewDesc?.includes("Party Burst")) {
    rewImg = baseURL + "/streamkar/gifts/40011772.png";
  } else if (rewDesc?.includes("Treasure Chest")) {
    rewImg = baseURL + "/streamkar/gifts/40011766.png";
  }
  //Event Gifts end
  else if (
    rewDesc?.includes("(NEW)") ||
    rewDesc?.includes("(New)") ||
    rewDesc?.includes("(new)") ||
    rewDesc?.includes("NEW") ||
    rewDesc?.includes("new") ||
    rewDesc?.includes("New")
  ) {
    if (
      rewDesc?.includes("Dazzling Diva entrance (New)") ||
      rewDesc?.includes("Dazzling Diva entrance (New)")
    ) {
      rewImg = baseURL + "/streamkar/rewards/divaEntrance.png";
    } else if (
      rewDesc?.includes("Merry Christmas Frame (New)") ||
      rewDesc?.includes("Merry Christmas Frame (New)")
    ) {
      rewImg = baseURL + "/streamkar/rewards/merryChristmasFrame.png";
    } else if (
      rewDesc?.includes("Merry Christmas room skin (New)") ||
      rewDesc?.includes("Merry Christmas Room Skin (New)")
    ) {
      rewImg = baseURL + "/streamkar/rewards/meryyChristmasTheme.png";
    } else if (
      rewDesc?.includes("New Year Champion Frame (New)") ||
      rewDesc?.includes("New Year Champion frame (New)")
    ) {
      rewImg = baseURL + "/streamkar/rewards/newyearChampionFrame.png";
    } else if (
      rewDesc?.includes("New Year Champion room skin (New)") ||
      rewDesc?.includes("New Year Champion Room Skin (New)")
    ) {
      rewImg = baseURL + "/streamkar/rewards/newyearChampionRoomSkin.png";
    }
  } else if (rewDesc?.includes("SVIP")) {
    rewImg = baseURL + "/streamkar/rewards/svip.png";
  } else if (
    rewDesc?.includes("VIP") ||
    rewDesc?.includes("Vip") ||
    rewDesc?.includes("vip")
  ) {
    rewImg = baseURL + "/streamkar/rewards/vip.png";
  } else if (
    rewDesc?.includes("Royal Carriage") ||
    rewDesc?.includes("Royal carriage")
  ) {
    rewImg = baseURL + "/streamkar/rewards/royal.png";
  } else if (
    rewDesc?.includes("Forge Master Audio Theme") ||
    rewDesc?.includes("Forge Master Audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/forgeMasterTheme.png";
  } else if (
    rewDesc?.includes("Discoverer Audio Broadcast theme") ||
    rewDesc?.includes("Discoverer Audio Broadcast theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/discovererAudioTheme.png";
  } else if (
    rewDesc?.includes("Combat Champion Audio Theme") ||
    rewDesc?.includes("Combat Champion Audio Theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/combatChampionRoomSkin.png";
  } else if (rewDesc?.includes("Victor") || rewDesc?.includes("victor")) {
    rewImg = baseURL + "/streamkar/rewards/victorSkin.png";
  } else if (
    rewDesc?.includes("CRICKET MASTER") ||
    rewDesc?.includes("Cricket Master")
  ) {
    rewImg = baseURL + "/streamkar/rewards/cricketAudioTheme.png";
  } else if (
    rewDesc?.includes("Radiance GOLD") ||
    rewDesc?.includes("Radiance Gold")
  ) {
    rewImg = baseURL + "/streamkar/rewards/radianceGold.png";
  } else if (
    rewDesc?.includes("Follower Card") ||
    rewDesc?.includes("Follower card")
  ) {
    rewImg = baseURL + "/streamkar/rewards/followerCardMSK.png";
  } else if (rewDesc?.includes("Gems") || rewDesc?.includes("gems")) {
    rewImg = baseURL + "/streamkar/rewards/gems.png";
  } else if (
    rewDesc?.includes("Space Audio Theme") ||
    rewDesc?.includes("Space audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/spaceship.png";
  } else if (
    rewDesc?.includes("Monarch Audio Broadcast Theme") ||
    rewDesc?.includes("Monarch Audio broadcast theme") ||
    rewDesc?.includes("Monarch Audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/monarchRoom.png";
  } else if (
    rewDesc?.includes("The Master Audio Theme") ||
    rewDesc?.includes("The Master Audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/theMasterRoomSkin.png";
  } else if (
    rewDesc?.includes("Game Master Audio Theme") ||
    rewDesc?.includes("Game Master Audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/gameMasterRoomSkin.png";
  } else if (
    rewDesc?.includes("Beans") ||
    rewDesc?.includes("beans") ||
    rewDesc?.includes("Bean") ||
    rewDesc?.includes("bean")
  ) {
    rewImg = baseURL + "/streamkar/rewards/beanbag.png";
  } else if (
    rewDesc?.includes("Celebration Audio Theme") ||
    rewDesc?.includes("celebration audio theme")
  ) {
    rewImg = baseURL + "/streamkar/rewards/celebrationRoomskin.png";
  } else if (rewDesc?.includes("entrance") || rewDesc?.includes("Entrance")) {
    if (rewDesc?.includes("Gold Luxury ") || rewDesc?.includes("Gold luxury")) {
      rewImg = baseURL + "/streamkar/rewards/goldLuxury.png";
    } else if (
      rewDesc?.includes("Rusty Ranger") ||
      rewDesc?.includes("rusty ranger")
    ) {
      rewImg = baseURL + "/streamkar/rewards/rustyRanger.png";
    } else if (rewDesc?.includes("F22") || rewDesc?.includes("f22")) {
      rewImg = baseURL + "/streamkar/rewards/f22.png";
    } else if (
      rewDesc?.includes("Pro Diver") ||
      rewDesc?.includes("Pro diver")
    ) {
      rewImg = baseURL + "/streamkar/rewards/proDiverEntrance.png";
    } else if (
      rewDesc?.includes("Phoenix") ||
      rewDesc?.includes("phoenix") ||
      rewDesc?.includes("phoenix")
    ) {
      rewImg = baseURL + "/streamkar/rewards/phoniex.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarch.png";
    } else if (rewDesc?.includes("Hawk") || rewDesc?.includes("hawk")) {
      rewImg = baseURL + "/streamkar/rewards/hawk.png";
    } else if (rewDesc?.includes("Phantom") || rewDesc?.includes("phantom")) {
      rewImg = baseURL + "/streamkar/rewards/phantom.png";
    } else if (rewDesc?.includes("Howzat") || rewDesc?.includes("Howzat")) {
      rewImg = baseURL + "/streamkar/rewards/howZatEntrance.png";
    }
  } else if (
    rewDesc?.includes("Room skin") ||
    rewDesc?.includes("room skin") ||
    rewDesc?.includes("Room Skin")
  ) {
    if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiRoom.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipRoom.png";
    } else if (rewDesc?.includes("Luminary") || rewDesc?.includes("Luminary")) {
      rewImg = baseURL + "/streamkar/rewards/luminarSkin.png";
    } else if (rewDesc?.includes("Doyen") || rewDesc?.includes("doyen")) {
      rewImg = baseURL + "/streamkar/rewards/doyenRoomskin.png";
    } else if (
      rewDesc?.includes("Christmas") ||
      rewDesc?.includes("christmas")
    ) {
      rewImg = baseURL + "/streamkar/rewards/christmasTheme.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchRoom.png";
    } else if (rewDesc?.includes("Boss") || rewDesc?.includes("boss")) {
      rewImg = baseURL + "/streamkar/rewards/bossRoomSkin.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteRoomSkin.png";
    } else if (
      rewDesc?.includes("Enlightening") ||
      rewDesc?.includes("enlightening")
    ) {
      rewImg = baseURL + "/streamkar/rewards/enlighteningRoom.png";
    } else if (
      rewDesc?.includes("FireBrand") ||
      rewDesc?.includes("firebrand")
    ) {
      rewImg = baseURL + "/streamkar/rewards/fireBrandAudioTheme.png";
    }
    //New Addition
    else if (rewDesc?.includes("Stadium") || rewDesc?.includes("stadium")) {
      rewImg = baseURL + "/streamkar/rewards/stadiumAudioTheme.jpg";
    } else if (
      rewDesc?.includes("The Master") ||
      rewDesc?.includes("The master") ||
      rewDesc?.includes("the master")
    ) {
      rewImg = baseURL + "/streamkar/rewards/theMasterRoomSkin.png";
    } else if (rewDesc?.includes("Azaadi") || rewDesc?.includes("azaadi")) {
      rewImg = baseURL + "/streamkar/rewards/azadiRoomskin.png";
    } else if (rewDesc?.includes("Subzero") || rewDesc?.includes("subzero")) {
      rewImg = baseURL + "/streamkar/rewards/subzeroSkin.png";
    }
    //End Addition
    else if (rewDesc?.includes("Alpha") || rewDesc?.includes("alpha")) {
      rewImg = baseURL + "/streamkar/rewards/alphaSkin.png";
    } else if (rewDesc?.includes("New") || rewDesc?.includes("new")) {
      rewImg = baseURL + "/streamkar/rewards/newRoomSkin.png";
    } else if (
      rewDesc?.includes("Celebration") ||
      rewDesc?.includes("celebration")
    ) {
      rewImg = baseURL + "/streamkar/rewards/celebrationRoomskin.png";
    } else if (
      rewDesc?.includes("Aesthetic") ||
      rewDesc?.includes("aesthetic")
    ) {
      rewImg = baseURL + "/streamkar/rewards/aestheticRoomskin.png";
    } else if (rewDesc?.includes("Victor") || rewDesc?.includes("victor")) {
      rewImg = baseURL + "/streamkar/rewards/victorSkin.png";
    } else if (rewDesc?.includes("Battle") || rewDesc?.includes("battle")) {
      rewImg = baseURL + "/streamkar/rewards/battleSkin.png";
    }
  } else if (rewDesc?.includes("Badge") || rewDesc?.includes("badge")) {
    if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiBadge.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipBadge.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchBadge.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchBadge.png";
    } else if (
      rewDesc?.includes("Sovereign") ||
      rewDesc?.includes("sovereign")
    ) {
      rewImg = baseURL + "/streamkar/rewards/sovereignBadge.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteBadge.png";
    } else if (rewDesc?.includes("Beloved") || rewDesc?.includes("beloved")) {
      rewImg = baseURL + "/streamkar/rewards/belovedBadge.png";
    } else if (rewDesc?.includes("Eid") || rewDesc?.includes("eid")) {
      rewImg = baseURL + "/streamkar/rewards/eidBadge.png";
    } else if (rewDesc?.includes("Blessed") || rewDesc?.includes("blessed")) {
      rewImg = baseURL + "/streamkar/rewards/blessedBadge.png";
    } else if (rewDesc?.includes("Topliner") || rewDesc?.includes("topliner")) {
      rewImg = baseURL + "/streamkar/rewards/toplinerBadge.png";
    }
  } else if (rewDesc?.includes("Frame") || rewDesc?.includes("frame")) {
    if (
      rewDesc?.includes("Super Star Profile") ||
      rewDesc?.includes("super star profile")
    ) {
      rewImg = baseURL + "/streamkar/rewards/superstarProfileFrame.png";
    } else if (
      rewDesc?.includes("Forge Master Proﬁle") ||
      rewDesc?.includes("Forge Master Profile") ||
      rewDesc?.includes("Forge Master profile") ||
      rewDesc?.includes("Forge master profile")
    ) {
      rewImg = baseURL + "/streamkar/rewards/forgeMaster.png";
    } else if (
      rewDesc?.includes("Sea Wolf") ||
      rewDesc?.includes("Sea wolf") ||
      rewDesc?.includes("sea wolf")
    ) {
      rewImg = baseURL + "/streamkar/rewards/seawolfFrame.png";
    } else if (rewDesc?.includes("Maestro") || rewDesc?.includes("maestro ")) {
      rewImg = baseURL + "/streamkar/rewards/maestro.png";
    } else if (rewDesc?.includes("Bunny") || rewDesc?.includes("bunny")) {
      rewImg = baseURL + "/streamkar/rewards/bunnyFrame.gif";
    } else if (
      rewDesc?.includes("Voyager Proﬁle") ||
      rewDesc?.includes("Voyager proﬁle") ||
      rewDesc?.includes("voyager proﬁle")
    ) {
      rewImg = baseURL + "/streamkar/rewards/voyagerProfileFrame.png";
    } else if (
      rewDesc?.includes("Loved One Profile") ||
      rewDesc?.includes("Loved One Profile")
    ) {
      rewImg = baseURL + "/streamkar/rewards/loveFrame.png";
    } else if (rewDesc?.includes("Kingpin") || rewDesc?.includes("kingpin")) {
      rewImg = baseURL + "/streamkar/rewards/kingpinFrame.png";
    } else if (rewDesc?.includes("Charmed") || rewDesc?.includes("Charmed")) {
      rewImg = baseURL + "/streamkar/rewards/charmedFrame.png";
    } else if (rewDesc?.includes("Frosty") || rewDesc?.includes("frosty")) {
      rewImg = baseURL + "/streamkar/rewards/frostyFrame.png";
    } else if (
      rewDesc?.includes("Boss Profile") ||
      rewDesc?.includes("boss profile")
    ) {
      rewImg = baseURL + "/streamkar/rewards/bossFrame.png";
    }
    // New Addition
    else if (
      rewDesc?.includes("Azaadi Frame") ||
      rewDesc?.includes("Azaadi frame")
    ) {
      rewImg = baseURL + "/streamkar/rewards/azadiFrame.png";
    } else if (
      rewDesc?.includes("Peacemaker Frame") ||
      rewDesc?.includes("Peacemaker frame")
    ) {
      rewImg = baseURL + "/streamkar/rewards/peacemakerFrame.png";
    } else if (
      rewDesc?.includes("Stellar Profile") ||
      rewDesc?.includes("Stellar profile")
    ) {
      rewImg = baseURL + "/streamkar/rewards/StellarFrame.png";
    } else if (rewDesc?.includes("Blazing") || rewDesc?.includes("blazing")) {
      rewImg = baseURL + "/streamkar/rewards/blazingFrame.png";
    } else if (rewDesc?.includes("Fury") || rewDesc?.includes("fury")) {
      rewImg = baseURL + "/streamkar/rewards/furyFrame.png";
    } else if (rewDesc?.includes("Fighter") || rewDesc?.includes("fighter")) {
      rewImg = baseURL + "/streamkar/rewards/fighterProfileFrame.png";
    }
    // END Addition
    else if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiProfileFrame.png";
    } else if (rewDesc?.includes("glory") || rewDesc?.includes("Glory")) {
      rewImg = baseURL + "/streamkar/rewards/glory-frame.png";
    } else if (rewDesc?.includes("Ace") || rewDesc?.includes("ace")) {
      rewImg = baseURL + "/streamkar/rewards/ace.png";
    } else if (rewDesc?.includes("King") || rewDesc?.includes("king")) {
      rewImg = baseURL + "/streamkar/rewards/kingFrame.png";
    } else if (rewDesc?.includes("Battle") || rewDesc?.includes("battle")) {
      rewImg = baseURL + "/streamkar/rewards/battleFrame.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipProfileFrame.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchProfileFrame.png";
    } else if (
      rewDesc?.includes("Super Hunter") ||
      rewDesc?.includes("Super hunter") ||
      rewDesc?.includes("Hunter")
    ) {
      rewImg = baseURL + "/streamkar/rewards/superHunterFrame.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteFrame.png";
    } else if (rewDesc?.includes("Mysterio") || rewDesc?.includes("mysterio")) {
      rewImg = baseURL + "/streamkar/rewards/mysterioFrame.png";
    } else if (rewDesc?.includes("Alpha") || rewDesc?.includes("alpha")) {
      rewImg = baseURL + "/streamkar/rewards/alphaFrame.png";
    } else if (rewDesc?.includes("Eid") || rewDesc?.includes("eid")) {
      rewImg = baseURL + "/streamkar/rewards/eidFrame.png";
    } else if (
      rewDesc?.includes("Celebration") ||
      rewDesc?.includes("celebration")
    ) {
      rewImg = baseURL + "/streamkar/rewards/celebrationFrame.png";
    } else if (rewDesc?.includes("Jericho") || rewDesc?.includes("jericho")) {
      rewImg = baseURL + "/streamkar/rewards/jerichoFrame.png";
    } else if (rewDesc?.includes("Mubarak") || rewDesc?.includes("mubarak")) {
      rewImg = baseURL + "/streamkar/rewards/mubarakFrame.png";
    } else if (rewDesc?.includes("Taj") || rewDesc?.includes("taj")) {
      rewImg = baseURL + "/streamkar/rewards/tajframe.png";
    } else if (rewDesc?.includes("Doyen") || rewDesc?.includes("doyen")) {
      rewImg = baseURL + "/streamkar/rewards/doyenFrame.png";
    }
  } else {
    rewImg = baseURL + "/streamkar/rewards/noRew.png";
  }
  return rewImg;
}
// else if (
//   rewDesc?.includes("Avatar Frame") ||
//   rewDesc?.includes("Avatar frame") ||
//   rewDesc?.includes("Avatar frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/avatarFrame.png";
// } else if (
//   rewDesc?.includes("Avatar Room Skin") ||
//   rewDesc?.includes("Avatar room skin") ||
//   rewDesc?.includes("Avatar Room skin") ||
//   rewDesc?.includes("Avatar room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/avatarTheme.png";
// } else if (
//   rewDesc?.includes("Forge Master Room Skin") ||
//   rewDesc?.includes("Forge Master room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/forgeMasterTheme.png";
// }
// else if (rewDesc?.includes("xp") || rewDesc?.includes("XP")) {
//   rewImg = baseURL + "/streamkar/rewards/xpPoint.png";
// } else if (rewDesc?.includes("Maestro") || rewDesc?.includes("maestro ")) {
//   rewImg = baseURL + "/streamkar/rewards/maestro.png";
// } else if (rewDesc?.includes("Fury") || rewDesc?.includes("fury")) {
//   rewImg = baseURL + "/streamkar/rewards/furyFrame.png";
// } else if (
//   rewDesc?.includes("FireBrand Profile Frame") ||
//   rewDesc?.includes("firebrand profile frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/firebrand Profile frame.png";
// } else if (
//   rewDesc?.includes("Maharaja Entrance") ||
//   rewDesc?.includes("maharaja entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/Maharaja-rewards.png";
// }
// //new Start
// else if (
//   rewDesc?.includes("Monarch Entrance") ||
//   rewDesc?.includes("Monarch entrnace") ||
//   rewDesc?.includes("Monarch entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/monarch.png";
// } else if (
//   rewDesc?.includes("pirate room skin") ||
//   rewDesc?.includes("pirate room skin") ||
//   rewDesc?.includes("Pirate Room Skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateRoomSkin.png";
// } else if (
//   rewDesc?.includes("Pirate Frame ") ||
//   rewDesc?.includes("Pirate Frame") ||
//   rewDesc?.includes("pirate frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateFrame.png";
// } else if (
//   rewDesc?.includes("Lone Wolf Entrance") ||
//   rewDesc?.includes("lone wolf entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/loneWolf.png";
// } else if (
//   rewDesc?.includes("Sea Wolf Room Skin") ||
//   rewDesc?.includes("Sea wolf room skin") ||
//   rewDesc?.includes("Sea Wolf room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/seaWolfRoomSkin.png";
// } else if (
//   rewDesc?.includes("Sea Wolf Frame ") ||
//   rewDesc?.includes("Sea Wolf Frame") ||
//   rewDesc?.includes("sea wolf Frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/seawolfFrame.png";
// } else if (
//   rewDesc?.includes("Night Shadow Room Skin") ||
//   rewDesc?.includes("Night shadow room skin") ||
//   rewDesc?.includes("night shadow room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/nightShadow.png";
// } else if (
//   rewDesc?.includes("Mega Star Frame") ||
//   rewDesc?.includes("mega star frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/megaStarFrame.png";
// } else if (
//   rewDesc?.includes("Sailor Frame ") ||
//   rewDesc?.includes("Sailor Frame") ||
//   rewDesc?.includes("sailor frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/sailorFrame.png";
// } else if (
//   rewDesc?.includes("Sailor Room Skin ") ||
//   rewDesc?.includes("Sailor Room Skin") ||
//   rewDesc?.includes("sailor room skin ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/sailorRoomSkin.png";
// } else if (
//   rewDesc?.includes("Splashed Room Skin") ||
//   rewDesc?.includes("splashed room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/splashedTheme.png";
// }
// //COMING SOON
// else if (
//   rewDesc?.includes("Victory Slide entrance") ||
//   rewDesc?.includes("Victory Slide Entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/victorySlide.png";
// }
// //new END
// else if (
//   rewDesc?.includes("Safari Champion Frame") ||
//   rewDesc?.includes("Safari Champion Frame") ||
//   rewDesc?.includes("Safari Champion Frame") ||
//   rewDesc?.includes("Safari Champion Frame ") ||
//   rewDesc?.includes("safari frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/safariDesertframe.png";
// } else if (
//   rewDesc?.includes("Safari Champion Room Skin") ||
//   rewDesc?.includes("Safari Champion Room Skin") ||
//   rewDesc?.includes("Safari Champion Room Skin") ||
//   rewDesc?.includes("Safari Champion Room Skin ") ||
//   rewDesc?.includes("safari skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/safariChampionRoomSkin.png";
// } else if (
//   rewDesc?.includes("Moon Knight Room Skin") ||
//   rewDesc?.includes("Moon Knight Room Skin") ||
//   rewDesc?.includes("Moon Knight Room Skin") ||
//   rewDesc?.includes("Moon Knight Room Skin ") ||
//   rewDesc?.includes("Moon Knight Room Skin ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/moonKnightSkin.png";
// } else if (
//   rewDesc?.includes("Moon Knight Frame") ||
//   rewDesc?.includes("Moon Knight frame") ||
//   rewDesc?.includes("Moon knight frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/moonKnightFrame.png";
// } else if (
//   rewDesc?.includes("Ramadan Glory Frame") ||
//   rewDesc?.includes("ramadan glory frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ramadanGloryFrame.png";
// } else if (
//   rewDesc?.includes("FireBrand Room Skin") ||
//   rewDesc?.includes("firebrand room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/fireBrandAudioTheme.png";
// } else if (
//   rewDesc?.includes("Ramadan Mubarak Room Skin") ||
//   rewDesc?.includes("ramadan mubarak room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ramdanMubarakRoomSkin.png";
// } else if (
//   rewDesc?.includes("Ignite Frame") ||
//   rewDesc?.includes("ignite frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/igniteFrame.png";
// } else if (
//   rewDesc?.includes("Desert Knight Room Skin") ||
//   rewDesc?.includes("Desert Knight Room Skin") ||
//   rewDesc?.includes("Desert Knight Room Skin") ||
//   rewDesc?.includes("desert knight room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/desertNight.png";
// } else if (
//   rewDesc?.includes("Desert Knight Frame") ||
//   rewDesc?.includes("Desert Knight Frame") ||
//   rewDesc?.includes("desert knight frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/desertnightFrame.png";
// } else if (
//   rewDesc?.includes("Waterfront Room Skin") ||
//   rewDesc?.includes("waterfront")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/waterfrontRoomskin.png";
// } else if (rewDesc?.includes("Fierce Frame") || rewDesc?.includes("fierce")) {
//   rewImg = baseURL + "/streamkar/rewards/fierceFrame.gif";
// } else if (
//   rewDesc?.includes("Iron Man Entrance") ||
//   rewDesc?.includes("Iron Man ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ironMan.png";
// } else if (
//   rewDesc?.includes("Frosty Room Skin") ||
//   rewDesc?.includes("Frosty Room") ||
//   rewDesc?.includes("Frosty Mubarak Room Skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/frostySkin.png";
// } else if (
//   rewDesc?.includes("Pirate Ship Entrance") ||
//   rewDesc?.includes("pirate ship")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateShip.png";
// } else if (rewDesc?.includes("Gems") || rewDesc?.includes("gems")) {
//   rewImg = baseURL + "/streamkar/rewards/gems.png";
// } else if (
//   rewDesc?.includes("BraveHeart") ||
//   rewDesc?.includes("braveheart") ||
//   rewDesc?.includes("Brave Heart Frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/braveHeart.png";
// } else if (
//   rewDesc?.includes("Ignite Profile Frame") ||
//   rewDesc?.includes("Ignite")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/igniteFrame.png";
// } else if (rewDesc?.includes("spaceship") || rewDesc?.includes("Spaceship")) {
//   rewImg = baseURL + "/streamkar/rewards/spaceship.png";
// } else if (rewDesc?.includes("Superstar") || rewDesc?.includes("Superstar")) {
//   rewImg = baseURL + "/streamkar/rewards/superstarProfileFrame.png";
// } else if (rewDesc?.includes("SVIP") ) {
//   rewImg = baseURL + "/streamkar/rewards/svip.png";
// } else if (
//   rewDesc?.includes("Bentley")  ||
//   rewDesc?.includes("bentley")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bentley.png";
// } else if (
//   rewDesc?.includes("F22")  ||
//   rewDesc?.includes("f22")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/f22.png";
// } else if (
//   rewDesc?.includes("Lantern")  ||
//   rewDesc?.includes("lantern")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/Lantern.png";
// } else if (
//   rewDesc?.includes("Bomber")  ||
//   rewDesc?.includes("bomber")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bomber.png";
// }else if (
//   rewDesc?.includes("Batman")  ||
//   rewDesc?.includes("batman")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/batmobile.png";
// }  else if (
//   rewDesc?.includes("VIP entrance")  ||
//   rewDesc?.includes("VIP Entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/vipcar.png";
// } else if (
//   rewDesc?.includes("VIP")  ||
//   rewDesc?.includes("Vip")  ||
//   rewDesc?.includes("vip")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/vip.png";
// } else if (
//   rewDesc?.includes("Solar")  ||
//   rewDesc?.includes("solar")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/solar.png";
// } else if (
//   rewDesc?.includes("Bugatti")  ||
//   rewDesc?.includes("bugatti")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bugati.png";
// } else if (
//   rewDesc?.includes("Hawk Entrance")  ||
//   rewDesc?.includes("hawk")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/hawk.png";
// } else if (
//   rewDesc?.includes("Motorcycle")  ||
//   rewDesc?.includes("motorcycle")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/motorcycle.png";
// } else if (
//   rewDesc?.includes("Bumblebee Entrance")  ||
//   rewDesc?.includes("bumblebee")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bumblebee.png";
// } else if (
//   rewDesc?.includes("Phantom Entrance")  ||
//   rewDesc?.includes("phantom")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/phantom.png";
// } else if (
//   rewDesc?.includes("Rider")  ||
//   rewDesc?.includes("rider")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/rider.png";
// } else if (
//   rewDesc?.includes("Tiger")  ||
//   rewDesc?.includes("tiger")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/tiger.png";
// } else if (
//   rewDesc?.includes("Bumblebee")  ||
//   rewDesc?.includes("bumblebee")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bumblebee.png";
// } else if (
//   rewDesc?.includes("Miss You")  ||
//   rewDesc?.includes("Miss you")  ||
//   rewDesc?.includes("MISS")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/missYou.png";
// } else if (
//   rewDesc?.includes("Star")  ||
//   rewDesc?.includes("star")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/Star.png";
// } else if (
//   rewDesc?.includes("Telescope")  ||
//   rewDesc?.includes("telescope")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/telescope.png";
// } else if (
//   rewDesc?.includes("Hummer")  ||
//   rewDesc?.includes("hummer")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/hummer.png";
// } else if (
//   rewDesc?.includes("Kingpin")  ||
//   rewDesc?.includes("kingpin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/kingspin.png";
// } else if (
//   rewDesc?.includes("Dragon")  ||
//   rewDesc?.includes("dragon")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/dragon.png";
// } else if (
//   rewDesc?.includes("Rusty")  ||
//   rewDesc?.includes("rusty")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/rustyRanger.png";
// } else if (
//   rewDesc?.includes("Lion")  ||
//   rewDesc?.includes("lion")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/lion.png";
// }
