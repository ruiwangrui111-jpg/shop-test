const categories = [
  { id: "hot", label: "热卖", title: "今天就吃点开心的" },
  { id: "rice", label: "主食", title: "一口满足的能量主食" },
  { id: "snack", label: "小吃", title: "边聊边吃的小快乐" },
  { id: "drink", label: "饮品", title: "冰爽气泡和茶饮" },
  { id: "sweet", label: "甜品", title: "收尾来点甜" },
  { id: "combo", label: "套餐", title: "选择困难就看这里" },
];

const dishes = [
  {
    id: "cheese-chicken-rice",
    category: "rice",
    hot: true,
    name: "芝士瀑布鸡排饭",
    desc: "酥脆鸡排、流心芝士、溏心蛋和海苔碎，一勺就很会。",
    price: 32,
    tags: ["上新", "招牌"],
    icon: "🍛",
    bg: "linear-gradient(135deg, #ffe15d, #ff7f50)",
  },
  {
    id: "tomato-beef-rice",
    category: "rice",
    hot: true,
    name: "番茄牛腩云朵饭",
    desc: "慢炖牛腩配浓郁番茄汁，酸甜开胃，米饭软糯。",
    price: 36,
    tags: ["人气"],
    icon: "🍅",
    bg: "linear-gradient(135deg, #ff9a76, #ff3d6e)",
  },
  {
    id: "thai-basil-rice",
    category: "rice",
    name: "泰式打抛猪肉饭",
    desc: "罗勒香气、微辣肉末和太阳蛋，适合想吃重口一点。",
    price: 29,
    tags: ["微辣"],
    icon: "🍳",
    bg: "linear-gradient(135deg, #57d68d, #ffd166)",
  },
  {
    id: "popcorn-chicken",
    category: "snack",
    hot: true,
    name: "咔滋盐酥鸡",
    desc: "外皮轻脆，撒梅子粉更香，适合两个人分着吃。",
    price: 18,
    tags: ["热卖"],
    icon: "🍗",
    bg: "linear-gradient(135deg, #ffcf6b, #f56f46)",
  },
  {
    id: "fries",
    category: "snack",
    name: "海盐芝士薯条",
    desc: "粗薯条配咸香芝士酱，趁热吃最快乐。",
    price: 16,
    tags: ["可分享"],
    icon: "🍟",
    bg: "linear-gradient(135deg, #ffe66d, #ffb703)",
  },
  {
    id: "spring-roll",
    category: "snack",
    name: "脆皮鲜虾春卷",
    desc: "鲜虾和蔬菜的清甜，搭配酸甜蘸酱。",
    price: 22,
    tags: ["轻食"],
    icon: "🍤",
    bg: "linear-gradient(135deg, #ffa94d, #4dd4ac)",
  },
  {
    id: "lemon-tea",
    category: "drink",
    hot: true,
    name: "暴打柠檬茶",
    desc: "手打香水柠檬，茶香清爽，少糖也好喝。",
    price: 13,
    tags: ["冰饮"],
    icon: "🍋",
    bg: "linear-gradient(135deg, #d9ff68, #18c7a7)",
  },
  {
    id: "peach-soda",
    category: "drink",
    name: "白桃乌龙气泡",
    desc: "白桃果香、乌龙茶底和气泡水，清甜不腻。",
    price: 16,
    tags: ["气泡"],
    icon: "🥤",
    bg: "linear-gradient(135deg, #ffc2d1, #7bdff2)",
  },
  {
    id: "mango-yogurt",
    category: "drink",
    name: "芒果酸奶昔",
    desc: "大块芒果果肉和酸奶打底，口感绵密。",
    price: 19,
    tags: ["浓郁"],
    icon: "🥭",
    bg: "linear-gradient(135deg, #ffd166, #ff8fab)",
  },
  {
    id: "pudding",
    category: "sweet",
    hot: true,
    name: "焦糖布丁杯",
    desc: "奶香细腻，焦糖微苦，饭后来一杯刚刚好。",
    price: 15,
    tags: ["甜品"],
    icon: "🍮",
    bg: "linear-gradient(135deg, #f8c471, #d35400)",
  },
  {
    id: "matcha-cake",
    category: "sweet",
    name: "抹茶云朵蛋糕",
    desc: "轻盈奶油和抹茶戚风，甜度控制得很舒服。",
    price: 21,
    tags: ["低甜"],
    icon: "🍰",
    bg: "linear-gradient(135deg, #95d5b2, #f8f9fa)",
  },
  {
    id: "solo-combo",
    category: "combo",
    hot: true,
    name: "单人快乐套餐",
    desc: "任意招牌主食搭配盐酥鸡和柠檬茶，省心又满足。",
    price: 48,
    tags: ["省 ¥8"],
    icon: "🍱",
    bg: "linear-gradient(135deg, #ff4f6d, #38a3ff)",
  },
  {
    id: "duo-combo",
    category: "combo",
    name: "双人能量套餐",
    desc: "两份主食、两杯饮品和一份分享小吃，适合结伴来吃。",
    price: 88,
    tags: ["双人"],
    icon: "🥘",
    bg: "linear-gradient(135deg, #845ec2, #ffc75f)",
  },
];

const state = {
  activeView: "menu",
  activeCategory: "hot",
  cart: {},
  note: "",
  spotlightDish: "",
  orders: loadOrders(),
};

const els = {
  viewTabs: document.querySelectorAll("[data-view]"),
  promoStrip: document.querySelector(".promo-strip"),
  menuView: document.querySelector("#menuView"),
  historyView: document.querySelector("#historyView"),
  staffView: document.querySelector("#staffView"),
  categoryTabs: document.querySelector("#categoryTabs"),
  activeCategoryLabel: document.querySelector("#activeCategoryLabel"),
  activeCategoryTitle: document.querySelector("#activeCategoryTitle"),
  dishCount: document.querySelector("#dishCount"),
  dishList: document.querySelector("#dishList"),
  cartCount: document.querySelector("#cartCount"),
  cartHint: document.querySelector("#cartHint"),
  cartTotal: document.querySelector("#cartTotal"),
  cartBar: document.querySelector("#cartBar"),
  openCart: document.querySelector("#openCart"),
  checkoutButton: document.querySelector("#checkoutButton"),
  overlay: document.querySelector("#overlay"),
  cartDrawer: document.querySelector("#cartDrawer"),
  cartItems: document.querySelector("#cartItems"),
  clearCart: document.querySelector("#clearCart"),
  orderNote: document.querySelector("#orderNote"),
  drawerCheckout: document.querySelector("#drawerCheckout"),
  confirmModal: document.querySelector("#confirmModal"),
  closeModal: document.querySelector("#closeModal"),
  confirmList: document.querySelector("#confirmList"),
  confirmNote: document.querySelector("#confirmNote"),
  confirmTotal: document.querySelector("#confirmTotal"),
  placeOrder: document.querySelector("#placeOrder"),
  successToast: document.querySelector("#successToast"),
  clearOrder: document.querySelector("#clearOrder"),
  continueOrder: document.querySelector("#continueOrder"),
  clearHistory: document.querySelector("#clearHistory"),
  historyList: document.querySelector("#historyList"),
  staffCount: document.querySelector("#staffCount"),
  staffStats: document.querySelector("#staffStats"),
  staffList: document.querySelector("#staffList"),
};

function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem("restaurantOrders") || "[]");
  } catch {
    return [];
  }
}

function saveOrders() {
  localStorage.setItem("restaurantOrders", JSON.stringify(state.orders));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function getStatusLabel(status) {
  return {
    pending: "待制作",
    making: "制作中",
    done: "已完成",
  }[status] || "待制作";
}

function getNextStatus(status) {
  return {
    pending: "making",
    making: "done",
    done: "pending",
  }[status] || "making";
}

function getNextStatusAction(status) {
  return {
    pending: "开始制作",
    making: "标记完成",
    done: "重新打开",
  }[status] || "开始制作";
}

function getVisibleDishes() {
  if (state.activeCategory === "hot") {
    return dishes.filter((dish) => dish.hot);
  }
  return dishes.filter((dish) => dish.category === state.activeCategory);
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([id, qty]) => {
      const dish = dishes.find((item) => item.id === id);
      return dish ? { ...dish, qty } : null;
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartQty() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function money(value) {
  return `¥${value}`;
}

function setQty(id, nextQty) {
  if (nextQty <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = nextQty;
  }
  render();
}

function setView(view) {
  state.activeView = view;
  hideSuccess();
  render();
}

function renderCategories() {
  els.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-tab ${category.id === state.activeCategory ? "active" : ""}" type="button" data-category="${category.id}">
          ${category.label}
        </button>
      `,
    )
    .join("");
}

function renderDishes() {
  const category = categories.find((item) => item.id === state.activeCategory);
  const visibleDishes = getVisibleDishes();
  els.activeCategoryLabel.textContent = category.label;
  els.activeCategoryTitle.textContent = category.title;
  els.dishCount.textContent = `${visibleDishes.length} 款`;
  els.dishList.innerHTML = visibleDishes
    .map((dish) => {
      const qty = state.cart[dish.id] || 0;
      return `
        <article class="dish-card ${state.spotlightDish === dish.id ? "spotlight" : ""}" data-dish-card="${dish.id}">
          <div class="dish-art" style="--dish-bg: ${dish.bg}" data-icon="${dish.icon}"></div>
          <div class="dish-info">
            <div class="tag-row">
              ${dish.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${dish.name}</h3>
            <p>${dish.desc}</p>
            <div class="dish-footer">
              <span class="price">${money(dish.price)}</span>
              <div class="stepper ${qty === 0 ? "is-zero" : ""}" aria-label="${dish.name} 数量">
                <button class="minus" type="button" data-action="minus" data-id="${dish.id}" aria-label="减少 ${dish.name}">−</button>
                <span class="qty">${qty}</span>
                <button class="plus" type="button" data-action="plus" data-id="${dish.id}" aria-label="增加 ${dish.name}">+</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCartBar() {
  const qty = getCartQty();
  const total = getCartTotal();
  const disabled = qty === 0;
  els.cartCount.textContent = disabled ? "未选餐" : `${qty} 件菜品`;
  els.cartHint.textContent = disabled ? "加点喜欢的菜吧" : "点击查看购物车";
  els.cartTotal.textContent = money(total);
  els.checkoutButton.disabled = disabled;
  els.drawerCheckout.disabled = disabled;
}

function renderViews() {
  els.viewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === state.activeView);
  });
  els.menuView.hidden = state.activeView !== "menu";
  els.categoryTabs.hidden = state.activeView !== "menu";
  els.cartBar.hidden = state.activeView !== "menu";
  els.historyView.hidden = state.activeView !== "history";
  els.staffView.hidden = state.activeView !== "staff";
}

function renderOrderCard(order, options = {}) {
  const statusClass = order.status === "making" ? "making" : order.status === "done" ? "done" : "";
  return `
    <article class="order-card">
      <div class="order-card-head">
        <div>
          <h3>${order.id}</h3>
          <p class="order-meta">${order.table} · ${formatTime(order.createdAt)}</p>
        </div>
        <span class="status-badge ${statusClass}">${getStatusLabel(order.status)}</span>
      </div>
      <ul class="order-items">
        ${order.items
          .map(
            (item) => `
              <li>
                <span>${item.name} × ${item.qty}</span>
                <strong>${money(item.price * item.qty)}</strong>
              </li>
            `,
          )
          .join("")}
      </ul>
      ${order.note ? `<p class="order-note">备注：${order.note}</p>` : ""}
      <div class="order-card-total">
        <span>${order.items.reduce((sum, item) => sum + item.qty, 0)} 件菜品</span>
        <strong>${money(order.total)}</strong>
      </div>
      ${
        options.staff
          ? `<div class="order-actions">
              <button class="status-button" type="button" data-order-status="${order.id}">
                ${getNextStatusAction(order.status)}
              </button>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderHistory() {
  if (state.orders.length === 0) {
    els.historyList.innerHTML = `<div class="empty-state">还没有历史订单，下一单会自动保存在这里。</div>`;
    return;
  }
  els.historyList.innerHTML = [...state.orders]
    .reverse()
    .map((order) => renderOrderCard(order))
    .join("");
}

function renderStaff() {
  const counts = state.orders.reduce(
    (acc, order) => {
      acc[order.status] += 1;
      return acc;
    },
    { pending: 0, making: 0, done: 0 },
  );
  els.staffCount.textContent = `${state.orders.length} 单`;
  els.staffStats.innerHTML = `
    <div class="stat-card"><strong>${counts.pending}</strong><span>待制作</span></div>
    <div class="stat-card"><strong>${counts.making}</strong><span>制作中</span></div>
    <div class="stat-card"><strong>${counts.done}</strong><span>已完成</span></div>
  `;
  if (state.orders.length === 0) {
    els.staffList.innerHTML = `<div class="empty-state">暂无订单。顾客提交后会出现在这里。</div>`;
    return;
  }
  els.staffList.innerHTML = [...state.orders]
    .reverse()
    .map((order) => renderOrderCard(order, { staff: true }))
    .join("");
}

function renderCartDrawer() {
  const items = getCartItems();
  if (items.length === 0) {
    els.cartItems.innerHTML = `<div class="empty-state">购物车还空着，先选几道招牌菜。</div>`;
    return;
  }
  els.cartItems.innerHTML = items
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <h3>${item.name}</h3>
            <p>${money(item.price)} × ${item.qty}</p>
          </div>
          <div class="stepper">
            <button class="minus" type="button" data-action="minus" data-id="${item.id}" aria-label="减少 ${item.name}">−</button>
            <span class="qty">${item.qty}</span>
            <button class="plus" type="button" data-action="plus" data-id="${item.id}" aria-label="增加 ${item.name}">+</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderConfirm() {
  const items = getCartItems();
  els.confirmList.innerHTML = items
    .map(
      (item) => `
        <div class="confirm-row">
          <span>${item.name} × ${item.qty}</span>
          <span>${money(item.price * item.qty)}</span>
        </div>
      `,
    )
    .join("");
  els.confirmTotal.textContent = money(getCartTotal());
  const note = els.orderNote.value.trim();
  els.confirmNote.textContent = note ? `备注：${note}` : "";
  els.confirmNote.classList.toggle("show", Boolean(note));
}

function render() {
  renderViews();
  renderCategories();
  renderDishes();
  renderCartBar();
  renderCartDrawer();
  renderHistory();
  renderStaff();
}

function showDishFromPromo(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;
  state.activeCategory = dish.category;
  state.spotlightDish = dishId;
  render();
  requestAnimationFrame(() => {
    document.querySelector(`[data-dish-card="${dishId}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
  window.setTimeout(() => {
    if (state.spotlightDish !== dishId) return;
    state.spotlightDish = "";
    renderDishes();
  }, 1600);
}

function openDrawer() {
  els.overlay.hidden = false;
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  if (els.confirmModal.getAttribute("aria-hidden") === "true") {
    els.overlay.hidden = true;
  }
}

function openConfirm() {
  if (getCartQty() === 0) return;
  renderConfirm();
  closeDrawer();
  els.overlay.hidden = true;
  els.confirmModal.setAttribute("aria-hidden", "false");
}

function closeConfirm() {
  els.confirmModal.setAttribute("aria-hidden", "true");
}

function showSuccess() {
  const items = getCartItems();
  if (items.length > 0) {
    state.orders.push({
      id: `A12-${String(state.orders.length + 1).padStart(3, "0")}`,
      table: "A12",
      createdAt: Date.now(),
      status: "pending",
      note: els.orderNote.value.trim(),
      total: getCartTotal(),
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
      })),
    });
    saveOrders();
    state.cart = {};
    els.orderNote.value = "";
  }
  closeConfirm();
  els.successToast.classList.add("show");
  els.successToast.setAttribute("aria-hidden", "false");
  render();
}

function hideSuccess() {
  els.successToast.classList.remove("show");
  els.successToast.setAttribute("aria-hidden", "true");
}

els.categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.activeCategory = button.dataset.category;
  state.spotlightDish = "";
  render();
});

els.viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

els.promoStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-promo-dish]");
  if (!button) return;
  showDishFromPromo(button.dataset.promoDish);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action][data-id]");
  if (!button) return;
  const id = button.dataset.id;
  const currentQty = state.cart[id] || 0;
  setQty(id, button.dataset.action === "plus" ? currentQty + 1 : currentQty - 1);
});

els.openCart.addEventListener("click", openDrawer);
els.overlay.addEventListener("click", closeDrawer);
els.clearCart.addEventListener("click", () => {
  state.cart = {};
  render();
});
els.clearHistory.addEventListener("click", () => {
  state.orders = [];
  saveOrders();
  render();
});
els.checkoutButton.addEventListener("click", openConfirm);
els.drawerCheckout.addEventListener("click", openConfirm);
els.closeModal.addEventListener("click", closeConfirm);
els.placeOrder.addEventListener("click", showSuccess);
els.clearOrder.addEventListener("click", () => {
  state.cart = {};
  els.orderNote.value = "";
  hideSuccess();
  render();
});
els.continueOrder.addEventListener("click", hideSuccess);

els.staffList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-status]");
  if (!button) return;
  const order = state.orders.find((item) => item.id === button.dataset.orderStatus);
  if (!order) return;
  order.status = getNextStatus(order.status);
  saveOrders();
  renderStaff();
  renderHistory();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeDrawer();
  closeConfirm();
});

render();
