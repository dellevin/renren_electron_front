<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-home">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <table>
            <tr>
              <th>博客</th>
              <td><a href="https://www.ittoolman.top/" target="_blank">https://www.ittoolman.top/</a></td>
            </tr>
            <tr>
              <th>默认账号密码</th>
              <td>admin/admin</td>
            </tr>
            <tr>
              <th>操作系统</th>
              <td>{{ sysInfo.osName }}</td>
            </tr>
            <tr>
              <th>系统版本</th>
              <td>{{ sysInfo.osVersion }}</td>
            </tr>
            <tr>
              <th>系统架构</th>
              <td>{{ sysInfo.osArch }}</td>
            </tr>
            <tr>
              <th>CPU核数</th>
              <td>{{ sysInfo.processors }}</td>
            </tr>
            <tr>
              <th>系统内存</th>
              <td>{{ sysInfo.totalPhysical }}MB</td>
            </tr>
            <tr>
              <th>剩余内存</th>
              <td>{{ sysInfo.freePhysical }}MB</td>
            </tr>
            <tr>
              <th>内存使用</th>
              <td>{{ sysInfo.memoryRate }}%</td>
            </tr>
            <tr>
              <th>系统语言</th>
              <td>{{ sysInfo.userLanguage }}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" :xs="24">
          <table>
            <tr>
              <th>JVM信息</th>
              <td>{{ sysInfo.jvmName }}</td>
            </tr>
            <tr>
              <th>JVM版本</th>
              <td>{{ sysInfo.javaVersion }}</td>
            </tr>
            <tr>
              <th>JAVA_HOME</th>
              <td>{{ sysInfo.javaHome }}</td>
            </tr>
            <tr>
              <th>工作目录</th>
              <td>{{ sysInfo.userDir }}</td>
            </tr>
            <tr>
              <th>JVM占用内存</th>
              <td>{{ sysInfo.javaTotalMemory }}MB</td>
            </tr>
            <tr>
              <th>JVM空闲内存</th>
              <td>{{ sysInfo.javaFreeMemory }}MB</td>
            </tr>
            <tr>
              <th>JVM最大内存</th>
              <td>{{ sysInfo.javaMaxMemory }}MB</td>
            </tr>
            <tr>
              <th>当前用户</th>
              <td>{{ sysInfo.userName }}</td>
            </tr>
            <tr>
              <th>CPU负载</th>
              <td>{{ sysInfo.systemCpuLoad }}%</td>
            </tr>
            <tr>
              <th>系统时区</th>
              <td>{{ sysInfo.userTimezone }}</td>
            </tr>
          </table>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<style scoped lang="less">
/* .mod-home {
  line-height: 1.5;
} */
.mod-home {
  table {
    width: 100%;
    border: 1px solid #ebeef5;
    border-collapse: collapse;
    th,
    td {
      padding: 12px 10px;
      border: 1px solid #ebeef5;
    }
    th {
      width: 30%;
    }
  }
}
</style>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import baseService from "@/service/baseService";
import { ElMessage } from "element-plus";

onMounted(() => {
  getSysInfo();
});

const sysInfo = reactive({
  osName: "",
  osVersion: "",
  osArch: "",
  processors: 0,
  totalPhysical: 0,
  freePhysical: 0,
  memoryRate: 0,
  userLanguage: "",
  jvmName: "",
  javaVersion: "",
  javaHome: "",
  userDir: "",
  javaTotalMemory: 0,
  javaFreeMemory: 0,
  javaMaxMemory: 0,
  userName: "",
  systemCpuLoad: 0,
  userTimezone: ""
});

const getSysInfo = () => {
  baseService.get("/sys/info").then((res) => {
    if (res.code !== 0) {
      return ElMessage.error(res.msg);
    }
    Object.assign(sysInfo, res.data)
  });
};
</script>
