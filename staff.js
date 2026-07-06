const els = {
  staffCount: document.querySelector("#staffCount"),
  staffStats: document.querySelector("#staffStats"),
  staffList: document.querySelector("#staffList"),
  refreshOrders: document.querySelector("#refreshOrders"),
};

let orders = loadOrders();

function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem("restaurantOrders") || "[]");
  } catch {
    return [];
  }
}

function saveOrders() {
  localStorage.setItem("restaurantOrders", JSON.stringify(orders));
}

function money(value) {
  return `¥${value}`;
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

function renderOrderCard(order) {
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
      <div class="order-actions">
        <button class="status-button" type="button" data-order-status="${order.id}">
          ${getNextStatusAction(order.status)}
        </button>
      </div>
    </article>
  `;
}

function renderStaff() {
  const counts = orders.reduce(
    (acc, order) => {
      acc[order.status] += 1;
      return acc;
    },
    { pending: 0, making: 0, done: 0 },
  );

  els.staffCount.textContent = `${orders.length} 单`;
  els.staffStats.innerHTML = `
    <div class="stat-card"><strong>${counts.pending}</strong><span>待制作</span></div>
    <div class="stat-card"><strong>${counts.making}</strong><span>制作中</span></div>
    <div class="stat-card"><strong>${counts.done}</strong><span>已完成</span></div>
  `;

  if (orders.length === 0) {
    els.staffList.innerHTML = `<div class="empty-state">暂无订单。顾客提交后会出现在这里。</div>`;
    return;
  }

  els.staffList.innerHTML = [...orders]
    .reverse()
    .map((order) => renderOrderCard(order))
    .join("");
}

els.staffList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-status]");
  if (!button) return;
  const order = orders.find((item) => item.id === button.dataset.orderStatus);
  if (!order) return;
  order.status = getNextStatus(order.status);
  saveOrders();
  renderStaff();
});

els.refreshOrders.addEventListener("click", () => {
  orders = loadOrders();
  renderStaff();
});

window.addEventListener("storage", () => {
  orders = loadOrders();
  renderStaff();
});

renderStaff();
