import { GlobalSettingsModel } from "./Models/base";
import { GuiSubscreen } from "./settingBase";

export class GuiGlobal extends GuiSubscreen {
    readonly character : PlayerCharacter;

    constructor(character: PlayerCharacter) {
		super();
		this.character = character;
    }

	get settings(): GlobalSettingsModel {
        Player.LSCG.GlobalModule = Player.LSCG.GlobalModule ?? { enabled: true, edgeBlur: false };
		Player.LSCG.LipstickModule = Player.LSCG.LipstickModule ?? { enabled: false };
		Player.LSCG.BoopsModule = Player.LSCG.BoopsModule ?? { enabled: false };
		Player.LSCG.MiscModule = Player.LSCG.MiscModule ?? { enabled: true, chloroformEnabled: false, gagChokeEnabled: false, handChokeEnabled: false };
        return Player.LSCG.GlobalModule
    }

    Run() {
		var prev = MainCanvas.textAlign;
		MainCanvas.textAlign = "left";

		DrawText("- LSCG General -", 225, 125, "Black", "Gray");
		DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png", "BCX main menu");

		// Enabled	[true/false]
		DrawText("LSCG Scripts Enabled:", GuiSubscreen.START_X, this.getYPos(1), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(1) - 32, 64, 64, "", this.settings.enabled ?? false);

		// Blur While Edged	[true/false]
		DrawText("Blur While Edged:", GuiSubscreen.START_X, this.getYPos(2), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(2) - 32, 64, 64, "", this.settings.edgeBlur ?? false);

		// Enable Kissmarks	[true/false]
		DrawText("Enable Lipstick Marks:", GuiSubscreen.START_X, this.getYPos(3), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(3) - 32, 64, 64, "", Player.LSCG.LipstickModule.enabled ?? false);

		// Enabled Boops	[true/false]
		DrawText("Enable Boop Reactions:", GuiSubscreen.START_X, this.getYPos(4), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(4) - 32, 64, 64, "", Player.LSCG.BoopsModule.enabled ?? false);

		// Chloroform Enabled	[true/false]
		DrawText("Enable Chloroform:", GuiSubscreen.START_X, this.getYPos(5), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(5) - 32, 64, 64, "", Player.LSCG.MiscModule.chloroformEnabled ?? false);

		// Hand Choke Enabled	[true/false]
		DrawText("Enable Hand Choking:", GuiSubscreen.START_X, this.getYPos(6), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(6) - 32, 64, 64, "", Player.LSCG.MiscModule.handChokeEnabled ?? false);

		// Gag Choke Enabled	[true/false]
		DrawText("Enable Gag Suffocation:", GuiSubscreen.START_X, this.getYPos(7), "Black", "Gray");
		DrawCheckbox(GuiSubscreen.START_X + 600, this.getYPos(7) - 32, 64, 64, "", Player.LSCG.MiscModule.gagChokeEnabled ?? false);

		MainCanvas.textAlign = prev;
	}

	Click() {
		super.Click();

		// Edge Blur Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(2) - 32, 64, 64)){
			this.settings.edgeBlur = !this.settings.edgeBlur;
		}

		// Kissmark Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(3) - 32, 64, 64)){
			Player.LSCG.LipstickModule.enabled = !Player.LSCG.LipstickModule.enabled;
		}

		// Boops Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(4) - 32, 64, 64)){
			Player.LSCG.BoopsModule.enabled = !Player.LSCG.BoopsModule.enabled;
		}

		// Chloroform Enabled Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(5) - 32, 64, 64)){
			Player.LSCG.MiscModule.chloroformEnabled = !Player.LSCG.MiscModule.chloroformEnabled;
		}

		// Hand Choke Enabled Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(6) - 32, 64, 64)){
			Player.LSCG.MiscModule.handChokeEnabled = !Player.LSCG.MiscModule.handChokeEnabled;
		}

		// Gag Choke Enabled Checkbox
		if (MouseIn(GuiSubscreen.START_X + 600, this.getYPos(7) - 32, 64, 64)){
			Player.LSCG.MiscModule.gagChokeEnabled = !Player.LSCG.MiscModule.gagChokeEnabled;
		}
	}
}