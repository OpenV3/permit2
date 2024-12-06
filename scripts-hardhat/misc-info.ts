import { SupportedChainId } from "./chains";

type Address = `0x${string}`;

export interface MiscInfo {
  PERMIT2: Address;
}

export const MISC_INFO: Partial<Record<SupportedChainId, MiscInfo>> = {
  [SupportedChainId.INK_SEPOLIA]: {
      PERMIT2: "0xE3709aB08457c8eDb0c0ee4c4F9193B39efC0769",
  },
};
