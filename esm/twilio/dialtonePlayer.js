import { InvalidArgumentError } from './errors';
/**
 * A Map of DTMF Sound Names to their mock frequency pairs.
 */
const bandFrequencies = {
    dtmf0: [1360, 960],
    dtmf1: [1230, 720],
    dtmf2: [1360, 720],
    dtmf3: [1480, 720],
    dtmf4: [1230, 790],
    dtmf5: [1360, 790],
    dtmf6: [1480, 790],
    dtmf7: [1230, 870],
    dtmf8: [1360, 870],
    dtmf9: [1480, 870],
    dtmfh: [1480, 960],
    dtmfs: [1230, 960],
};
export default class DialtonePlayer {
    constructor(_context) {
        this._context = _context;
        /**
         * Gain nodes, reducing the frequency.
         */
        this._gainNodes = [];
        this._gainNodes = [
            this._context.createGain(),
            this._context.createGain(),
        ];
        this._gainNodes.forEach((gainNode) => {
            gainNode.connect(this._context.destination);
            gainNode.gain.value = 0.1;
            this._gainNodes.push(gainNode);
        });
    }
    cleanup() {
        this._gainNodes.forEach((gainNode) => {
            gainNode.disconnect();
        });
    }
    /**
     * Play the dual frequency tone for the passed DTMF name.
     * @param sound
     */
    play(sound) {
        const frequencies = bandFrequencies[sound];
        if (!frequencies) {
            throw new InvalidArgumentError('Invalid DTMF sound name');
        }
        const oscillators = [
            this._context.createOscillator(),
            this._context.createOscillator(),
        ];
        oscillators.forEach((oscillator, i) => {
            oscillator.type = 'sine';
            oscillator.frequency.value = frequencies[i];
            oscillator.connect(this._gainNodes[i]);
            oscillator.start();
            oscillator.stop(this._context.currentTime + 0.1);
            oscillator.addEventListener('ended', () => oscillator.disconnect());
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbHRvbmVQbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvdHdpbGlvL2RpYWx0b25lUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVoRDs7R0FFRztBQUNILE1BQU0sZUFBZSxHQUFzQztJQUN6RCxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNsQixLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNsQixLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNsQixLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztDQUNuQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTyxjQUFjO0lBTWpDLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFMMUM7O1dBRUc7UUFDSCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7U0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLENBQUMsS0FBYTtRQUNoQixNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBcUI7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1NBQ2pDLENBQUM7UUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBMEIsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUM1RCxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQXdCLENBQUM7WUFDM0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YifQ==