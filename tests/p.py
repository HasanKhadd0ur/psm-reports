import matplotlib.pyplot as plt

# بيانات الرسم البياني
stages = ['0s', '30s', '1m', '2m', '3m', '4m', '4m30s']
vus = [0, 100, 200, 200, 200, 100, 0]

# رسم عدد المستخدمين الافتراضيين بمرور الوقت
plt.figure(figsize=(10, 5))
plt.plot(stages, vus, marker='o', linestyle='-', color='b', label='Virtual Users (VUs)')
plt.xlabel('Time (Stages)')
plt.ylabel('Virtual Users (VUs)')
plt.title('Virtual Users Over Time')
plt.grid(True)
plt.legend()
plt.show()

# بيانات نتائج استجابة الطلبات بناءً على نتائج الاختبار
time_stages = ['0s', '30s', '1m', '2m', '3m', '4m', '4m30s','5m']
http_req_duration_avg = [0, 150, 250, 350, 380, 310, 200,200]  # مثال على بيانات مدة الاستجابة

# رسم مدة استجابة الطلبات بمرور الوقت
plt.figure(figsize=(10, 5))
plt.plot(time_stages, http_req_duration_avg, marker='x', linestyle='-', color='r', label='HTTP Request Duration (ms)')
plt.xlabel('Time (Stages)')
plt.ylabel('HTTP Request Duration (ms)')
plt.title('HTTP Request Duration Over Time')
plt.grid(True)
plt.legend()
plt.show()
