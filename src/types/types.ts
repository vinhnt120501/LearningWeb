import React from 'react';

// 1. Khai báo kiểu dữ liệu cho các biến

// 1.1. Kiểu dữ liệu cho tin nhắn Chat.
export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

// 1.2. Kiểu dữ liệu cho mục menu trong Sidebar.
export interface MenuItem {
    icon: React.ComponentType;
    label: string;
}

// 2. Khai báo các thông tin hiển thị ở giao diện (front-end)
export const UI_STRINGS = {
    // Header
    APP_NAME: "TechTack",

    // 2.1. Welcome
    WELCOME_TITLE: "What can I do for you?",

    // 2.2. Input
    INPUT_PLACEHOLDER: "How can I help you today?",

    // Chat
    LOADING_TEXT: "AI is thinking...",
    MOCK_AI_RESPONSE: "Đây là dữ liệu mẫu. Tôi đã nhận được tin nhắn của bạn!",

    // 2.2. Action buttons (tooltip)
    ACTION_COPY: "Sao chép",
    ACTION_LIKE: "Thích",
    ACTION_DISLIKE: "Không thích",
    ACTION_REGENERATE: "Tạo lại",
    ACTION_VOICE: "Giọng nói",

    // 2.3. Sidebar
    SIDEBAR_OPEN: "Mở thanh bên",
    SIDEBAR_CLOSE: "Đóng thanh bên",
    MENU_NEW_CHAT: "Cuộc trò chuyện mới",
    MENU_SEARCH: "Tìm kiếm",
    MENU_CHAT: "Hội thoại",

    // 2.4. Footer
    FOOTER_NOTE: "Press Enter to send • AI can make mistakes. Verify important info.",
};

// 3. Khai báo kích thước layout
export const LAYOUT = {
    SIDEBAR_COLLAPSED_WIDTH: 52,
    SIDEBAR_EXPANDED_WIDTH: 260,
    CONTENT_MAX_WIDTH: '48rem',
};
