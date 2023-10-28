import { ChannelType, Server } from '@prisma/client';
import { create } from 'zustand';

type ServerModalType = 'createServer' | 'editServer' | 'deleteServer';
type ChannelModalType = 'createChannel';
type MemberModalType = 'invite' | 'members' | 'leaveServer';

export type ModalType = ServerModalType | ChannelModalType | MemberModalType;

interface ModalData {
  server?: Server;
  channelType?: ChannelType;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));
